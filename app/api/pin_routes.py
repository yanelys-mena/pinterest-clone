from xml.etree.ElementTree import Comment
from flask import Blueprint, jsonify, request, make_response
from flask_login import login_required
from app.models import Pin, db, Board
from app.forms.pin_form import PinForm
from app.aws import (delete_image_from_s3, upload_file_to_s3, allowed_file, get_unique_filename)


pin_routes = Blueprint('comments', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@pin_routes.route('/',  methods=['GET'])
# @login_required
def pins():
    pins = Pin.query.all()
    return {'pins': [pin.to_dict() for pin in pins]}


@pin_routes.route('/', methods=['POST'])
@login_required
def add_pin():
    form = PinForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    image = form.image.data
    
    if image == 'null':
        image = None
        form.validate_on_submit()
        new_errors = form.errors
        new_errors["image"] = ["Please provide an image."]
        return {'errors': validation_errors_to_error_messages(new_errors)}, 401
    
    
    
    if not isinstance(image, str):

        if "image" not in request.files:
            {'errors': 'errors'}

        image = request.files["image"]
        
        if not allowed_file(image.filename):
            return {"errors": "file type not permitted"}, 400
            
        image.filename = get_unique_filename(image.filename)
    
        upload = upload_file_to_s3(image)

        if "url" not in upload:
            print('NOT IN UPLOAD')
            return upload, 400

        image_url = upload["url"] 
        
        if form.validate_on_submit():
            new_pin = Pin(
                title=data['title'],
                description=data['description'],
                image=image_url,
                link=data['link'],
                user_id=data['user_id'], 
            )
            db.session.add(new_pin)
            db.session.commit()
        else: 
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
        
        return new_pin.to_dict()
    
    else: 
        if form.validate_on_submit():
            new_pin = Pin(
                title=data['title'],
                description=data['description'],
                image=data['image'],
                link=data['link'],
                user_id=data['user_id'], 
            )
            db.session.add(new_pin)
            db.session.commit()
        else: 
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
        
        return new_pin.to_dict()
    
    
    
@pin_routes.route('/<int:pin_id>', methods=['PUT'])
@login_required
def update_pin(pin_id):
    form = PinForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    
    if form.validate_on_submit():
        pin_to_update = Pin.query.get(pin_id)
        
        pin_to_update.title=data['title'],
        pin_to_update.description=data['description'],
        pin_to_update.image=data['image'],
        pin_to_update.link=data['link'],
        pin_to_update.user_id=data['user_id'], 
        
        db.session.commit()
        return pin_to_update.to_dict()
    else: 
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    


@pin_routes.route('/<int:pin_id>', methods=['DELETE'])
@login_required
def delete_pin(pin_id):
    pin = Pin.query.get(pin_id)
    if pin:
        delete_image_from_s3(str(pin.image).split('/')[-1])
        db.session.delete(pin)
        db.session.commit()
        return pin.to_dict()
    else:
        return make_response('Not an existing pin')


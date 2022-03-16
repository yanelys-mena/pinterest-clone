from xml.etree.ElementTree import Comment
from flask import Blueprint, jsonify, request, make_response
from flask_login import login_required
from app.models import Pin, db
from app.forms.pin_form import PinForm

pin_routes = Blueprint('comments', __name__)


@pin_routes.route('/')
@login_required
def pins():
    pins = Pin.query.all()
    return {'pins': [pin.to_dict() for pin in pins]}


@pin_routes.route('/', methods=['POST'])
@login_required
def add_pin():
    form = PinForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    
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
        print('****', form.errors)
    
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
    else: 
        print('****', form.errors)
    
    return pin_to_update.to_dict()
    


@pin_routes.route('/<int:pin_id>', methods=['DELETE'])
@login_required
def delete_pin(pin_id):
    pin = Pin.query.get(pin_id)
    if pin:
        db.session.delete(pin)
        db.session.commit()
    else:
        return make_response('Not an existing pin')


from xml.etree.ElementTree import Comment
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Pin, db
from app.forms.pin_form import PinForm

pin_routes = Blueprint('comments', __name__)

# Decide wether the get all comments is needed. Comments are already accessible via the comment.to_dict() method
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
    


@pin_routes.route('/', methods=['PUT'])
@login_required
def update_pin():
    pass


@pin_routes.route('/', methods=['DELETE'])
@login_required
def delete_pin():
    pass


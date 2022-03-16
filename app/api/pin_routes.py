from xml.etree.ElementTree import Comment
from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Pin

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
    pass

@pin_routes.route('/', methods=['PUT'])
@login_required
def update_pin():
    pass


@pin_routes.route('/', methods=['DELETE'])
@login_required
def delete_pin():
    pass


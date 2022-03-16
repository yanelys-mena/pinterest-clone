from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Comment

comment_routes = Blueprint('comments', __name__)

# modify to get comments by pin ID
@comment_routes.route('/')
@login_required
def pins_by_user():
    pins = Comment.query.all()
    return {'pins': [pin.to_dict() for pin in pins]}


@comment_routes.route('/', methods=['POST'])
@login_required
def add_pin():
    pass

@comment_routes.route('/', methods=['PUT'])
@login_required
def update_pin():
    pass


@comment_routes.route('/', methods=['DELETE'])
@login_required
def delete_pin():
    pass


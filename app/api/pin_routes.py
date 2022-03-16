from xml.etree.ElementTree import Comment
from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Comment

comment_routes = Blueprint('comments', __name__)

# Decide wether the get all comments is needed. Comments are already accessible via the comment.to_dict() method
@comment_routes.route('/')
@login_required
def comments():
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}


@comment_routes.route('/', methods=['POST'])
@login_required
def add_comment():
    pass

@comment_routes.route('/', methods=['PUT'])
@login_required
def update_comment():
    pass


@comment_routes.route('/', methods=['DELETE'])
@login_required
def delete_comment():
    pass


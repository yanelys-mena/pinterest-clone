from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms.pin_form import PinForm
from app.models import Comment
from app.forms.comment_form import CommentForm

comment_routes = Blueprint('comments', __name__)

# modify to get comments by pin ID
@comment_routes.route('/',  methods=['GET'])
@login_required
def pins_by_user():
    pins = Comment.query.all()
    return {'pins': [pin.to_dict() for pin in pins]}


@comment_routes.route('/', methods=['POST'])
@login_required
def add_pin():
    comment = CommentForm()
    comment['csrf_token'].data = request.cookies['crsf_token']
    data = comment.data
    
    if comment.validate_on_submit():
        new_comment = Comment(
            content = data.content,
            pin_id = data.pin_id,
            user_id = data.user_id
        )
    

@comment_routes.route('/', methods=['PUT'])
@login_required
def update_pin():
    pass


@comment_routes.route('/', methods=['DELETE'])
@login_required
def delete_pin():
    pass


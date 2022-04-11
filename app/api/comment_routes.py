from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.api.board_routes import validation_errors_to_error_messages
from app.models import Comment, db
from app.forms.comment_form import CommentForm

comment_routes = Blueprint('all_comments', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

    
# modify to get comments by pin ID
@comment_routes.route('/',  methods=['GET'])
@login_required
def pins_by_user():
    pins = Comment.query.all()
    return {'pins': [pin.to_dict() for pin in pins]}


@comment_routes.route('/', methods=['POST'])
@login_required
def add_pin():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    if form.validate_on_submit():
        new_comment = Comment(
            content = data['content'],
            pin_id = data['pin_id'],
            user_id = data['user_id'],
            created_at = data['created_at'],
            updated_at = data['updated_at']
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
        
    

@comment_routes.route('/<int:comment_id>', methods=['PUT'])
@login_required
def update_pin(comment_id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    if form.validate_on_submit():
        new_comment = Comment(
            content = data['content'],
            pin_id = data['pin_id'],
            user_id = data['user_id'],
            created_at = data['created_at'],
            updated_at = data['updated_at']
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
        


@comment_routes.route('/', methods=['DELETE'])
@login_required
def delete_pin():
    pass


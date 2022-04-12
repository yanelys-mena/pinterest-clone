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


@comment_routes.route('/<int:pin_id>', methods=['GET'])
@login_required
def get_comments(pin_id):
    comments = Comment.query.filter(Comment.pin_id == pin_id)
    return {'comments': [comment.to_dict() for comment in comments]}
    

@comment_routes.route('/', methods=['POST'])
@login_required
def add_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    if form.validate_on_submit():
        new_comment = Comment(
            content = data['content'],
            pin_id = data['pin_id'],
            user_id = data['user_id']
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
        
    

@comment_routes.route('/<int:comment_id>', methods=['PUT'])
@login_required
def update_comment(comment_id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    if form.validate_on_submit():
        comment_to_update = Comment.query.get(comment_id)

        comment_to_update.content = data['content'],
        comment_to_update.pin_id = data['pin_id'],
        comment_to_update.user_id = data['user_id'],
        comment_to_update.created_at = comment_to_update.created_at,

        db.session.commit()
        return comment_to_update.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
        


@comment_routes.route('/<int:comment_id>', methods=['DELETE'])
@login_required
def delete_comment(comment_id):
    comment = Comment.query.get(comment_id)
    if comment:
        db.session.delete(comment)
        db.session.commit()
        return comment.to_dict()
    else:
        return 'failed'   


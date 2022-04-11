from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, DateField
from wtforms.validators import DataRequired, Length
from app.models import Comment

class CommentForm(FlaskForm):
    content = TextAreaField('content', validators=[DataRequired('Please enter a comment.')])
    pin_id =  IntegerField('pin id', validators=[DataRequired()])
    user_id = IntegerField('user id', validators=[DataRequired()])
    created_at = DateField('created at')
    updated_at = DateField('created at')


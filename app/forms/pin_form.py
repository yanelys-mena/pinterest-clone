from typing import Text
from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, Length



class PinForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired('Title can not be blank'), Length(min=1, max=100, message='Title must be less than 100 characters')])
    description = TextAreaField('Description')
    image = StringField('Image', validators=[DataRequired('Please provide an image.')])
    link = StringField('Link', validators=[Length(min=3, max=800, message='Please provide a link between 3 and 800 characters')])
    user_id = IntegerField('User Id', validators=[DataRequired()])
    
from typing import Text
from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, Length



class BoardForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired('Name is required.'), Length(min=1, max=50, message='Name must be between 1 and 50 characters.')])
    user_id = IntegerField('User Id', validators=[DataRequired()])
    
from typing import Text
from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import StringField, TextAreaField, IntegerField, FileField
from wtforms.validators import DataRequired, Length, Regexp



class PinForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired('Title can not be blank'), Length(min=1, max=100, message='Title must be less than 100 characters')])
    description = TextAreaField('Description', default='')
    image = FileField('Image', validators=[DataRequired('Please provide an image.')])
    link = StringField('Link', default='', validators=[Regexp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$', message='Please provide a valid url.')])
    user_id = IntegerField('User Id', validators=[DataRequired()])

    
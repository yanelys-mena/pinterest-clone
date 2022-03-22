from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import StringField, TextAreaField, IntegerField, FileField
from wtforms.validators import DataRequired, Length, ValidationError

import re


def valid_link(form, field):
    link = field.data
    if len(link) > 0:
        is_valid = re.search('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$', link)
        
        if not is_valid:
             raise ValidationError('Please provide a valid url.')



class PinForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired('Please enter a title.'), Length(min=1, max=100, message='Title must be between 1 and 100 characters.')])
    description = TextAreaField('Description', default='', validators=[Length(min=0, max=100, message='Description must be less than 500 characters.')])
    image = FileField('image', validators=[DataRequired('Please provide an image.')])
    link = StringField('Link', default='', validators=[Length(min=0, max=100, message='Link must be less than 500 characters.'), valid_link])
    user_id = IntegerField('User Id', validators=[DataRequired()])

    
    
    #  Regexp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$', message='Please provide a valid url.')
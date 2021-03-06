from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length, EqualTo
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


def confirm_password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('No such user exists.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')



class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired('Please enter a username.'), username_exists, Length(min=3,max=30,message='Username must be between 3 and 30 characters')])
    
    email = StringField('email', validators=[DataRequired('Please enter an email.'), user_exists, Length(min=5, max=255, message='Please enter an email between 5 and 255 characters.'), Email(message='Please enter a valid email address.')])
   
    password = StringField('password', validators=[DataRequired('Please enter a password.'), EqualTo('confirm_password', message='Passwords must match.'), Length(min=7,max=100,message='Password must be between 8 and 100 characters')])
   
    confirm_password = StringField('confirm_password', validators=[DataRequired(message='Please confirm your password.'), Length(min=7,max=100,message='Password must be between 8 and 100 characters')])
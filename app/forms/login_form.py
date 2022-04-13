from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('The email does not belong to any account.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('The credentials provided are invalid.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired('Please enter an email.'),  Length(min=5, max=255, message='Please enter an email between 5 and 255 characters.',), Email(message='Hmm...that doesn\'t look like an email address.')])
    password = StringField('password', validators=[
                           DataRequired('Please enter a password.'), password_matches])

from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .follows import follows
import json


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    photo = db.Column(db.String(255))
    bio = db.Column(db.Text)
    website = db.Column(db.String(500))
    hashed_password = db.Column(db.String(255), nullable=False)

    pins = db.relationship("Pin", back_populates="user", cascade="all, delete")
    comments = db.relationship(
        "Comment", back_populates="user", cascade="all, delete")

    boards = db.relationship(
        "Board", back_populates="user", cascade="all, delete")

    followers = db.relationship(
        'User',
        secondary=follows,
        primaryjoin=(follows.c.follower_id == id),
        secondaryjoin=(follows.c.followed_id == id),
        backref=db.backref("following", lazy="dynamic"),
        lazy="dynamic"
    )

    @ property
    def password(self):
        return self.hashed_password

    @ password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'photo': self.photo,
            'bio': self.bio,
            'website': self.website,
            'followers': [{'id': follow.id, 'username': follow.username, 'photo': follow.photo} for follow in self.following],
            'following': [{'id': follow.id, 'username': follow.username, 'photo': follow.photo} for follow in self.followers],
            'id_of_following': [follow.id for follow in self.followers],
            'id_of_follower': [follow.id for follow in self.followers],
        }
        
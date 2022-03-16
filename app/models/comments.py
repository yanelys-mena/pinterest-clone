from .db import db
from datetime import datetime


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    pin_id = db.Column(db.Integer, db.ForeignKey('pins.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship("User", back_populates='comments')
    pin = db.relationship(
        'Pin',
        back_populates='comments'
    )

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'secret': self.secret,
            'user': self.user,
            'pin': self.pin,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }

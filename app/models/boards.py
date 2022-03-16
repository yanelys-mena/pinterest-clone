from .db import db
from .pins_boards import pins_boards


class Board(db.Model):
    __tablename__ = 'boards'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    secret = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship("User", back_populates='boards')
    pins = db.relationship(
        'Pin',
        secondary=pins_boards,
        back_populates='boards'
    )

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'secret': self.secret,
            'user_id': self.user_id,
            'pins': self.pins
        }

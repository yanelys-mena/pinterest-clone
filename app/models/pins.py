from .db import db
from .pins_boards import pins_boards


class Pin(db.Model):
    __tablename__ = 'pins'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    image = db.Column(db.String(800), nullable=False)
    link = db.Column(db.String(800))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship("User", back_populates='pins')
    board = db.relationships(
        'Board',
        secondary=pins_boards,
        back_populates='pins'
    )

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'image': self.image,
            'link': self.link,
            'user': self.user,
            'board': self.board
        }

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
    comments = db.relationship("Comment", back_populates='pin')
    boards = db.relationship(
        'Board',
        secondary=pins_boards,
    )

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'image': self.image,
            'link': self.link,
            'user': self.user.to_dict(),
            'boards': self.boards.to_dict(),
            'comments': self.comments.to_dict()
        }

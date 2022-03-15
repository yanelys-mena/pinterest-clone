from .db import db


db.Table(
    'pins_boards',
    db.Column('pin_id', db.Integer, db.ForeignKey('pins.id'), nullable=False),
    db.Column('board_id', db.Integer, db.ForeignKey(
        'boards.id'), nullable=False)
)

from .db import db

pins_boards = db.Table(
    "pins_boards",
    db.Column("pin_id", db.Integer, db.ForeignKey(
        "pins.id"), primary_key=True),
    db.Column("board_id", db.Integer, db.ForeignKey(
        "boards.id"), primary_key=True)
)


# pins_boards = db.Table(
#     'pins_boards',
#    Column('pin_id', db.Integer, db.ForeignKey(
#         'pins.id'), primary_key=True),
#     db.Column('board_id', db.Integer, db.ForeignKey(
#         'boards.id'), primary_key=True)
# )

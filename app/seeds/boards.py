from app.models import db, Board
from app.seeds.data.board_seeds import board_seeds


def seed_boards():

    # db.session.add(tara)

    db.session.commit()


# dependent entities
def undo_boards():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()

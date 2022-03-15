from app.models import db, pins_boards
from app.seeds.data.pins_boards_seeds import pins_boards_seeds


def seed_pins_boards():

    # db.session.add(tara)

    db.session.commit()


# dependent entities
def undo_pins_boards():
    db.session.execute('TRUNCATE pins_boards RESTART IDENTITY CASCADE;')
    db.session.commit()

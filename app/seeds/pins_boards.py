from app.models import db, pins_boards


def seed_pins_boards():

    # db.session.add(tara)

    db.session.commit()


# dependent entities
def undo_users():
    db.session.execute('TRUNCATE pins_boards RESTART IDENTITY CASCADE;')
    db.session.commit()

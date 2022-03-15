from app.models import db, Pin


def seed_pins():

    # db.session.add(tara)

    db.session.commit()


# dependent entities
def undo_users():
    db.session.execute('TRUNCATE pins RESTART IDENTITY CASCADE;')
    db.session.commit()

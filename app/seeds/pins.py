from app.models import db, Pin
from app.seeds.data.pin_seeds import pin_seeds


def seed_pins():

    # db.session.add(tara)

    db.session.commit()


# dependent entities
def undo_pins():
    db.session.execute('TRUNCATE pins RESTART IDENTITY CASCADE;')
    db.session.commit()

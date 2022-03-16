from app.models import db, Pin
from app.seeds.data.pin_seeds import pin_seeds


def seed_pins():

    for pin in pin_seeds:
        new_pin = Pin(
            title=pin.get('title'),
            description=pin.get('description'),
            image=pin.get('image'),
            link=pin.get('link'),
            user_id=pin.get('user_id'),
        )
        db.session.add(new_pin)

    db.session.commit()


# dependent entities
def undo_pins():
    db.session.execute('TRUNCATE pins RESTART IDENTITY CASCADE;')
    db.session.commit()

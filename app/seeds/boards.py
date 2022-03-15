from app.models import db, Board


def seed_boards():

    # db.session.add(tara)

    db.session.commit()


# dependent entities
def undo_users():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()

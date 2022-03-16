from app.models import db, follows
from app.seeds.data.follow_seeds import follow_seeds

def seed_follows():
    for item in follow_seeds:
        add_association = follows.insert().values(item)
        db.session.execute(add_association)
    db.session.commit()


def undo_follows():
    db.session.execute('TRUNCATE follows RESTART IDENTITY CASCADE')
    db.session.commit()

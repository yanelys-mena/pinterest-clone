from app.models import db, follows


def seed_follows():
    first_follow = follows(followed_id=1, follower_id=2)
    second_follow = follows(followed_id=1, follower_id=3)
    third_follow = follows(followed_id=1, follower_id=4)
    fourth_follow = follows(followed_id=2, follower_id=1)

    db.session.add(first_follow)
    db.session.add(second_follow)
    db.session.add(third_follow)
    db.session.add(fourth_follow)
    db.session.commit()


def undo_follows():
    db.session.execute('TRUNCATE follows RESTART IDENTITY CASCADE')
    db.session.commit()

from app.models import db, Comment
from app.seeds.data.comment_seeds import comments


def seed_comments():

    for comment in comments:
        new_comment = Comment(
            name=comment.get('name'),
            secret=comment.get('secret'),
            user_id=comment.get('user_id'),
        )
        db.session.add(new_comment)

    db.session.commit()


# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()

from app.models import db, Board
from app.seeds.data.board_seeds import board_seeds


def seed_boards():

    for board in board_seeds:
        new_board = Board(
            name=board.get('name'),
            secret=board.get('secret'),
            user_id=board.get('user_id'),
        )
        db.session.add(new_board)

    db.session.commit()


# dependent entities
def undo_boards():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()

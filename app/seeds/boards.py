from app.models import db, Board, Pin
from app.seeds.data.board_seeds import board_seeds


def seed_boards():
    # board_one = Board(
    #         name='Top Spots to Travel To',
    #         secret=0,
    #         user_id=1,
    # )

    # miami_one = Pin.query.get(1)
    # miami_two = Pin.query.get(7)
    # miami_three = Pin.query.get(3)
    
    # board_one.pins.append(miami_one)
    # board_one.pins.append(miami_two)
    # board_one.pins.append(miami_three)
    
    # db.session.add(board_one)
    
    
    for board in board_seeds:
        new_board = Board(
            name=board.get('name'),
            user_id=board.get('user_id'),
        )
        db.session.add(new_board)
        
    db.session.commit()


# dependent entities
def undo_boards():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()

from app.models import db, pins_boards
from app.seeds.data.pins_boards_seeds import pins_boards_seeds


def seed_pins_boards():
    for item in pins_boards_seeds:
        add_association = pins_boards.insert().values(item)
        db.session.execute(add_association)
        
    db.session.commit()


def undo_pins_boards():
    db.session.execute(
        'TRUNCATE pins_boards RESTART IDENTITY CASCADE;')
    db.session.commit()


# from app.models import db, pins_boards
# from app.seeds.data.pins_boards_seeds import pins_boards_seeds


# def seed_pins_boards():

#     for pair in pins_boards_seeds:
#         new_pair = pins_boards(
#             pin_id=pair.get('pin_id'),
#             board_id=pair.get('board_id'),
#         )
#         db.session.add(new_pair)

#     db.session.commit()


# # dependent entities
# def undo_pins_boards():
#     db.session.execute('TRUNCATE pins_boards RESTART IDENTITY CASCADE;')
#     db.session.commit()

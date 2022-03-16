from app.models import db, pins_boards
# from app.seeds.data.pins_boards_seeds import pins_boards_seeds
from alembic import op


# def seed_pins_boards():

op.bulk_insert(
    pins_boards,
    [
        {
            "pin_id": 37,
            "board_id": 10
        },
        {
            "pin_id": 42,
            "board_id": 10
        },
        {
            "pin_id": 43,
            "board_id": 10
        },
        {
            "pin_id": 41,
            "board_id": 11
        },
        # Wedding Boards
        {
            "pin_id": 23,
            "board_id": 9
        },
        {
            "pin_id": 2,
            "board_id": 9
        },
        {
            "pin_id": 24,
            "board_id": 8
        },
        # Hiking Boards
        {
            "pin_id": 33,
            "board_id": 4,
        },
        {
            "pin_id": 32,
            "board_id": 4,
        },
        # cyrano green board
        {
            "pin_id": 15,
            "board_id": 5,
        },
        {
            "pin_id": 4,
            "board_id": 4,
        },
        {
            "pin_id": 8,
            "board_id": 4,
        },
        # demo miami board
        {
            "pin_id": 7,
            "board_id": 2,
        },
        {
            "pin_id": 22,
            "board_id": 2,
        },
        {
            "pin_id": 1,
            "board_id": 4,
        },
        # demo travel board
        {
            "pin_id": 30,
            "board_id": 1,
        },
        {
            "pin_id": 38,
            "board_id": 1,
        },
        {
            "pin_id": 14,
            "board_id": 1,
        }

    ])

db.session.commit()


def undo_pins_boards():
    db.session.execute(
        'TRUNCATE pins_boards.insert().values RESTART IDENTITY CASCADE;')
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

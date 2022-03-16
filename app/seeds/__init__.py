from flask.cli import AppGroup
from .users import seed_users, undo_users
from .pins import seed_pins, undo_pins
from .boards import seed_boards, undo_boards
from .comments import seed_comments, undo_comments
from .pins_boards import undo_pins_boards
# from .follows import seed_follows, undo_follows


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_pins()
    seed_boards()
    seed_comments()
    # seed_follows()
    # seed_pins_boards()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_users()
    undo_pins()
    undo_boards()
    undo_comments()
    undo_pins_boards()
    # undo_follows()
    # Add other undo functions here

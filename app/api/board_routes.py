from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Board

board_routes = Blueprint('boards', __name__)

# adjust this route later to query by user
@board_routes.route('/')
@login_required
def boards_by_user():
    boards = Board.query.all()
    return {'boards': [board.to_dict() for board in boards]}


@board_routes.route('/', methods=['POST'])
@login_required
def add_board():
    pass

@board_routes.route('/', methods=['PUT'])
@login_required
def update_board():
    pass


@board_routes.route('/', methods=['DELETE'])
@login_required
def delete_board():
    pass


#adding pins to a board
@board_routes.route('/<int:id>', methods=['POST'])
@login_required
def add_pin_to_board():
    pin_id = request.json['pin_id']
    board_id = request.json['board_id']
    

@board_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_pin_from_board():
    pass
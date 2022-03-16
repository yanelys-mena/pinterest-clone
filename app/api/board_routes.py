from flask import Blueprint, jsonify, request, make_response
from flask_login import login_required, current_user
from app.models import Board, Pin, db
from app.forms.board_form import BoardForm

board_routes = Blueprint('boards', __name__)

# adjust this route later to query by user
@board_routes.route('/')
@login_required
def boards_by_user():
    boards = Board.query.filter(Board.user_id == current_user.id).all()
    return {'boards': [board.to_dict() for board in boards]}


@board_routes.route('/', methods=['POST'])
@login_required
def add_board():
    form = BoardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    
    if form.validate_on_submit():
        print('@@@@')
        new_board = Board(
            name=data['name'],
            user_id=data['user_id'],
        )
        db.session.add(new_board)
        db.session.commit()
    else: 
        print('****', form.errors)
    
    return new_board.to_dict()

@board_routes.route('/<int:board_id>', methods=['PUT'])
@login_required
def update_board(board_id):
    form = BoardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    
    if form.validate_on_submit():
        baord_to_update = Board.query.get(board_id)
        
        baord_to_update.name=data['name'],
        baord_to_update.user_id=data['user_id'], 
        
        db.session.commit()
    else: 
        print('****', form.errors)
    
    return baord_to_update.to_dict()


@board_routes.route('/<int:board_id>', methods=['DELETE'])
@login_required
def delete_board(board_id):
    board = Board.query.get(board_id)
    if board:
        db.session.delete(board)
        db.session.commit()
        return {'success': 'success'}
    else:
        return make_response('Not an existing board')


#adding pins to a board
@board_routes.route('/pin-board/', methods=['POST'])
@login_required
def add_pin_to_board():
    pin = Pin.query.get(request.json['pin_id'])
    board = Board.query.get(request.json['board_id'])
    
    if pin and board:
        board.pins.append(pin)
        db.session.commit()
        return {'success': 'success'}
    else:
        return make_response('Pin or Board does not exist.')
    
    

@board_routes.route('/pin-board/', methods=['DELETE'])
@login_required
def delete_pin_from_board():
    pin = Pin.query.get(request.json['pin_id'])
    board = Board.query.get(request.json['board_id'])
    
    if pin and board:
        board.pins.remove(pin)
        db.session.commit()
        return {'success': 'success'}
    else:
        return make_response('Pin or Board does not exist.')
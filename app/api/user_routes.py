from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db

user_routes = Blueprint('users', __name__)






@user_routes.route('/<int:id>')
@login_required
def users(id):
    user = User.query.get(id)
    return user.to_dict()
    # return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>',  methods=['GET'])
@login_required
def user(id):
    user = User.query.get(id)
    # return user.login_to_dict()
    return user.to_dict()


@user_routes.route('/follow/<int:id>', methods=['POST'])
@login_required
def add_follow(id):
    followedId = request.json["followed_id"]
    followerId = request.json["follower_id"]

    followed = User.query.get(followedId)
    follower = User.query.get(followerId)

    follower.followers.append(followed)
    db.session.commit()

    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/unfollow/<int:id>', methods=['DELETE'])
@login_required
def delete_follow(id):
    followedId = request.json["unfollow"]
    followerId = request.json["follower_id"]
    
    remove_followed = User.query.get(followedId)
    follower = User.query.get(followerId)


    follower.followers.remove(remove_followed)
    db.session.commit()

    user = User.query.get(id)

    return user.to_dict()



@user_routes.route('/')
@login_required
def all_users():
    print('888')
    users = User.query.all()
    return {'users': [user.id for user in users]}

from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    # return user.login_to_dict()
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['POST'])
@login_required
def add_follow():
    followedId = request.json["followed_id"]
    followerId = request.json["follower_id"]

    followed = User.query.get(followedId)
    follower = User.query.get(followerId)

    follower.followers.append(followed)
    db.session.commit()

    currentUser = User.query.get(followerId)
    currentFollows = currentUser.followers
    follower_dict = [follow.to_dict() for follow in currentFollows]

    return {"userFollowers": follower_dict}


@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_follow():
    user = User.query.get(current_user.id)
    removeUser = User.query.get(id)

    user.followers.remove(removeUser)
    db.session.commit()

    currentUser = User.query.get(current_user.id)
    currentFollows = currentUser.followers
    follower_dict = [follow.to_dict() for follow in currentFollows]

    return {"userFollowers": follower_dict}



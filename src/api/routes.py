from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import hashlib
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/private', methods=['GET'])
@jwt_required()
def show_email():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    return jsonify({"response": "User logged in", "email": user.email}), 200


@api.route('/login', methods=['POST'])
def user_login():
    user_email = request.json.get("email", None)
    user_password = request.json.get("password", None)
    user = User.query.filter_by(email = user_email, password = user_password).first()

    if user is None:
        return jsonify({"Error": "Wrong email or password"}), 401
    
    token = create_access_token(identity=user.id)
    return jsonify({"response": "Successfully logged in", "token": token, "email": user.email}), 200

@api.route('/register', methods=["POST"])
def register_user():
    user_email = request.json.get("email", None)
    user_password = request.json.get("password", None)
    user_exists = User.query.filter_by(email = user_email).first()
    if user_exists:
        return jsonify({"msg": "Sorry, this user already exists!"}), 300
    new_user = User(email = user_email, password = user_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "New user has been created!"}), 200


@api.route('/users/<id>', methods=['DELETE'])
def delete_user(id):
    delete_user = User.query.get(id)
    if delete_user is None:
        return jsonify({"Error": "User not found"})
    db.session.delete(delete_user)
    db.session.commit()
    return jsonify({"msg": "User successfully deleted"}), 200

@api.route('/users', methods=['GET'])
def get_users():
    all_users = User.query.all()
    all_users = list(map(lambda index: index.serialize(), all_users))
    response_body =jsonify(all_users)
    return response_body, 200


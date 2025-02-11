from flask import Blueprint, request, jsonify
import firebase_admin
from firebase_admin import auth as firebase_auth

bp = Blueprint('auth', __name__)

@bp.route('/verify-token', methods=['POST'])
def verify_token():
    token = request.json.get('token')
    try:
        decoded_token = firebase_auth.verify_id_token(token)
        return jsonify({'uid': decoded_token['uid']})
    except Exception as e:
        return jsonify({'error': str(e)}), 401 
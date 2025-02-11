from flask import Blueprint, request, jsonify
from app.printer.printer_driver import print_receipt

bp = Blueprint('printer', __name__)

@bp.route('/print-receipt', methods=['POST'])
def print_receipt_endpoint():
    data = request.json
    image_path = data.get("image_path")
    if not image_path:
        return jsonify({"error": "No image path provided"}), 400

    if print_receipt(image_path):
        return jsonify({"status": "Print job initiated"}), 200
    else:
        return jsonify({"error": "Printing failed"}), 500 
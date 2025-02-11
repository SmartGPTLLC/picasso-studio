from flask import request, jsonify
from flask.blueprints import Blueprint
from app.utils.image_transformer import transform_to_greyscale
from app.printer.printer_driver import print_receipt

bp = Blueprint('images', __name__)

@bp.route('/process', methods=['POST'])
def process():
    data = request.json
    image_url = data.get("image_url")
    if not image_url:
        return jsonify({"error": "No image URL provided"}), 400
    
    # Trigger asynchronous processing of the image
    task = process_image.delay(image_url)
    return jsonify({"task_id": task.id, "status": "Processing started"}), 202

@bp.route('/transform-and-print', methods=['POST'])
def transform_and_print():
    data = request.json
    image_url = data.get("image_url")
    if not image_url:
        return jsonify({"error": "No image URL provided"}), 400
    try:
        # Transform the image (synchronously)
        transformed_image = transform_to_greyscale(image_url, output_path="transformed.jpg")

        if print_receipt(transformed_image):
            # Log metadata to Firestore
            from app.services.firestore_service import add_image_metadata
            doc_id = add_image_metadata(image_url, transformed_image, status="printed")
            return jsonify({
                "status": "Image transformed and printing initiated",
                "metadata_doc_id": doc_id
            }), 200
        else:
            return jsonify({"error": "Printing failed"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500 
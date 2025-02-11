from flask import Blueprint, request, jsonify
from app.tasks.celery_tasks import process_image

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
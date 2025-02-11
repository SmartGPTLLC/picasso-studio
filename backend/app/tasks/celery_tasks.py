from celery import Celery
import time

# Configure Celery with your broker (Redis in this example)
celery_app = Celery('tasks', broker='redis://localhost:6379/0')

@celery_app.task
def process_image(image_url):
    # Simulate a long-running image processing job
    time.sleep(5)
    # Here you might add your image transformation logic (e.g., applying filters)
    return f"Processed image at {image_url}" 
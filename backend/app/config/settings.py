import os

# Flask configuration
DEBUG = os.getenv('DEBUG', 'True') == 'True'
SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key')

# Firebase Admin credentials initialization (path to service account key)
FIREBASE_CREDENTIALS = os.getenv('FIREBASE_CREDENTIALS', 'path/to/firebase/credentials.json')

# Logging level
LOG_LEVEL = os.getenv('LOG_LEVEL', 'DEBUG')

# Celery / Redis configuration
CELERY_BROKER_URL = os.getenv('CELERY_BROKER_URL', 'redis://localhost:6379/0') 
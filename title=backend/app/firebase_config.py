import os
import firebase_admin
from firebase_admin import credentials

# Only initialize the Firebase Admin SDK once
if not firebase_admin._apps:
    # Use the path specified in FIREBASE_CREDENTIALS or default to the service account file
    cred_path = os.environ.get('FIREBASE_CREDENTIALS', './picasso-5163b-firebase-adminsdk-fbsvc-bb635f229e.json')
    cred = credentials.Certificate(cred_path)
    firebase_admin.initialize_app(cred) 
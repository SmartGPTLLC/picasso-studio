import firebase_admin
from firebase_admin import firestore

def get_firestore_client():
    """Returns an instance of Firestore client."""
    return firestore.client()

def add_image_metadata(image_url, transformed_image_path, user_id=None, status="uploaded"):
    """
    Store metadata for an image in Firestore.
    
    Args:
        image_url (str): Original URL of the uploaded image.
        transformed_image_path (str): Path or identifier for the transformed image.
        user_id (Optional[str]): The ID of the user that uploaded the image.
        status (str): The status of this record (e.g., "uploaded" or "printed").
    
    Returns:
        str: The ID of the newly created document.
    """
    db = get_firestore_client()
    doc_ref = db.collection("images").document()
    data = {
        "image_url": image_url,
        "transformed_image_path": transformed_image_path,
        "user_id": user_id,
        "status": status,
        "timestamp": firestore.SERVER_TIMESTAMP,
    }
    doc_ref.set(data)
    return doc_ref.id

def get_image_metadata(doc_id):
    """Retrieve metadata for an image by document ID."""
    db = get_firestore_client()
    doc_ref = db.collection("images").document(doc_id)
    doc = doc_ref.get()
    return doc.to_dict() if doc.exists else None 
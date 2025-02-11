from flask import Flask
import app.firebase_config  # Initialize Firebase Admin SDK
from app.api import auth, images, printer

app = Flask(__name__)
app.config.from_object('app.config.settings')

# Register blueprints
app.register_blueprint(auth.bp, url_prefix='/api/auth')
app.register_blueprint(images.bp, url_prefix='/api/images')
app.register_blueprint(printer.bp, url_prefix='/api/printer')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True) 
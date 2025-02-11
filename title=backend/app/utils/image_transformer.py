import requests
from io import BytesIO
from PIL import Image

def transform_to_greyscale(image_url, output_path='transformed.jpg'):
    """
    Downloads the image from image_url, converts it to greyscale,
    and saves it to the specified output_path.
    """
    response = requests.get(image_url)
    response.raise_for_status()  # Raise exception on HTTP error
    image = Image.open(BytesIO(response.content))
    greyscale_img = image.convert("L")  # Convert image to greyscale
    greyscale_img.save(output_path)
    return output_path 
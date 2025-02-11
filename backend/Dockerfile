# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy requirements file into the container and install dependencies
COPY requirements.txt /app/requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the backend source code into the container
COPY . /app

# Expose port 5000 for the Flask app
EXPOSE 5000

# Run the application using gunicorn for production
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app.main:app"] 
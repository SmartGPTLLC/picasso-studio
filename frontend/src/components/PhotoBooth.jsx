import React, { useRef, useState, useEffect } from 'react';
import './PhotoBooth.css';

function PhotoBooth() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setIsCameraActive(true);
          setErrorMessage(null);
        }
      } else {
        setErrorMessage("Your browser does not support camera access.");
      }
    } catch (err) {
      console.error("Error accessing camera: ", err);
      setErrorMessage("Error accessing camera. Please check your camera settings.");
    }
  };

  const stopCamera = () => {
    try {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
      setIsCameraActive(false);
    } catch (err) {
      console.error("Error stopping camera: ", err);
    }
  };

  const capturePhoto = () => {
    try {
      const video = videoRef.current;
      if (!video || video.videoWidth === 0 || video.videoHeight === 0) {
        setErrorMessage("Camera feed is not ready. Please try again.");
        return;
      }
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL = canvas.toDataURL('image/png');
      setCapturedImage(dataURL);
      setErrorMessage(null);
      // Save captured image to localStorage for the gallery
      saveImageToGallery(dataURL);
    } catch (err) {
      console.error("Error capturing photo: ", err);
      setErrorMessage("Error capturing photo. Please try again.");
    }
  };

  const saveImageToGallery = (imageData) => {
    try {
      let gallery = JSON.parse(localStorage.getItem('galleryImages')) || [];
      gallery.push(imageData);
      localStorage.setItem('galleryImages', JSON.stringify(gallery));
    } catch (err) {
      console.error("Error saving to gallery: ", err);
      setErrorMessage("Error saving photo to gallery.");
    }
  };

  return (
    <div className="photobooth-container">
      <h2>Photobooth</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="camera">
        {isCameraActive ? (
          <video ref={videoRef} className="video-feed" autoPlay muted></video>
        ) : (
          <p>Camera not active</p>
        )}
      </div>
      <button onClick={capturePhoto} className="capture-button">
        Capture Photo
      </button>
      {capturedImage && (
        <div className="captured-image">
          <h3>Captured Image:</h3>
          <img src={capturedImage} alt="Captured" />
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
}

export default PhotoBooth; 
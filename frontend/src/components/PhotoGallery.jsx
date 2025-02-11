import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';

function PhotoGallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    try {
      const gallery = JSON.parse(localStorage.getItem('galleryImages')) || [];
      setGalleryImages(gallery);
      setErrorMsg(null);
    } catch (err) {
      console.error("Error loading gallery images: ", err);
      setErrorMsg("Error loading gallery images.");
    }
  }, []);

  return (
    <div className="gallery-container">
      <h2>Photo Gallery</h2>
      {errorMsg && <div className="error-message">{errorMsg}</div>}
      {galleryImages.length === 0 ? (
        <p>No photos captured yet.</p>
      ) : (
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PhotoGallery; 
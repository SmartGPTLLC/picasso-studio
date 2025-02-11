import React from 'react';

const ImagePreview = ({ imageUrl }) => {
  return (
    <div className="image-preview">
      {imageUrl ? (
        <img src={imageUrl} alt="Preview" style={{ width: '100%', maxHeight: '60vh', objectFit: 'contain' }} />
      ) : (
        <p>Please upload an image to transform.</p>
      )}
    </div>
  );
};

export default ImagePreview; 
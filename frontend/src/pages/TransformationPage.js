import React, { useState, useEffect } from 'react';
import ImagePreview from '../components/ImagePreview';
import TransformationSelector from '../components/TransformationSelector';
import { applyTransformation } from '../services/api';
import BottomNav from '../components/BottomNav';

const TransformationPage = () => {
  const [originalImage, setOriginalImage] = useState(null); // Could be set via upload from Dashboard or Firebase Storage
  const [transformedImage, setTransformedImage] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('grayscale');
  const [intensity, setIntensity] = useState(50);
  const [error, setError] = useState(null);

  // When controls change, call the backend to transform the image with error handling
  useEffect(() => {
    setError(null);
    if (originalImage) {
      applyTransformation({ image: originalImage, filter: selectedFilter, intensity })
        .then((newImageUrl) => {
          setTransformedImage(newImageUrl);
        })
        .catch((error) => {
          console.error("Transformation error:", error);
          setError("Transformation failed. Please try again.");
        });
    }
  }, [selectedFilter, intensity, originalImage]);

  return (
    <div className="transformation-page">
      <header>
        <h1>Transform Your Image</h1>
      </header>
      <main>
        <ImagePreview imageUrl={transformedImage || originalImage} />
        {error && <p className="error">{error}</p>}
        <TransformationSelector
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          intensity={intensity}
          onIntensityChange={setIntensity}
        />
      </main>
      <BottomNav />
    </div>
  );
};

export default TransformationPage; 
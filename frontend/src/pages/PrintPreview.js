import React, { useState } from 'react';
import ImagePreview from '../components/ImagePreview';
import { useLocation } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const PrintPreview = () => {
  // We expect the transformed image URL to be passed in via location.state
  const { state } = useLocation();
  const { imageUrl } = state || {};
  const [printStatus, setPrintStatus] = useState("");

  const handlePrint = async () => {
    setPrintStatus("");
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/printer/print-receipt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image_path: imageUrl })
      });
      const data = await response.json();
      if (response.ok) {
        setPrintStatus("Print job initiated.");
      } else {
        setPrintStatus("Print error: " + data.error);
      }
    } catch (error) {
      console.error("Printing error", error);
      setPrintStatus("Printing error: " + error.message);
    }
  };

  return (
    <div className="print-preview">
      <h1>Print Preview</h1>
      {imageUrl ? <ImagePreview imageUrl={imageUrl} /> : <p>No image available for printing.</p>}
      <button onClick={handlePrint}>Print</button>
      {printStatus && <p>{printStatus}</p>}
      <BottomNav />
    </div>
  );
};

export default PrintPreview; 
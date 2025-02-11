export const applyTransformation = async ({ image, filter, intensity }) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/images/transform-and-print`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image_url: image, filter, intensity })
  });
  if (!response.ok) {
    throw new Error('Transformation request failed');
  }
  const data = await response.json();
  return data.transformedImageUrl; // Ensure your backend returns the new URL as 'transformedImageUrl'
}; 
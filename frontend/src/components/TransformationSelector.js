import React from 'react';

const filters = [
  { name: 'grayscale', label: 'Grayscale' },
  { name: 'sepia', label: 'Sepia' },
  { name: 'contrast', label: 'High Contrast' },
  { name: 'cartoon', label: 'Cartoonify' }
];

const TransformationSelector = ({ selectedFilter, onFilterChange, intensity, onIntensityChange }) => {
  return (
    <div className="transformation-selector">
      <h3>Select a Filter</h3>
      <div className="filter-options">
        {filters.map((filter) => (
          <button
            key={filter.name}
            className={filter.name === selectedFilter ? 'active' : ''}
            onClick={() => onFilterChange(filter.name)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="filter-intensity">
        <label htmlFor="intensity">Intensity: {intensity}</label>
        <input
          type="range"
          id="intensity"
          min="0"
          max="100"
          value={intensity}
          onChange={(e) => onIntensityChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default TransformationSelector; 
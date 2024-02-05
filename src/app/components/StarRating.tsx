// StarRating.tsx
import React, { useState } from 'react';

interface RatingStarProps {
  selected: boolean;
  onSelect: () => void;
}

const RatingStar: React.FC<RatingStarProps> = ({ selected, onSelect }) => (
  <span
    style={{ cursor: 'pointer', color: selected ? 'gold' : 'gray' }}
    onClick={onSelect}
  >
    ★
  </span>
);

interface RatingProps {
  initialValue: number;
  onChange: (newRating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ initialValue, onChange }) => {
  const [rating, setRating] = useState(initialValue);

  const handleSelect = (selectedRating: number) => {
    setRating(selectedRating);
    onChange(selectedRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <RatingStar
          key={value}
          selected={value <= rating}
          onSelect={() => handleSelect(value)}
        />
      ))}
    </div>
  );
};

export default Rating;


import React from 'react';

interface StarRatingProps {
  selectedRating: number;
  onStarClick: (rating: number) => void;
  translations: {
    ratings: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
  };
}

const StarRating: React.FC<StarRatingProps> = ({
  selectedRating,
  onStarClick,
  translations
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starNumber = index + 1;
      return (
        <button
          key={index}
          type="button"
          onClick={() => onStarClick(starNumber)}
          className={`text-4xl transition-all duration-300 hover:scale-125 transform ${
            starNumber <= selectedRating 
              ? 'text-yellow-400 animate-pulse' 
              : 'text-gray-400 hover:text-yellow-300'
          }`}
        >
          ★
        </button>
      );
    });
  };

  return (
    <div className="animate-scale-in animation-delay-500">
      <div className="flex justify-center space-x-2 py-4">
        {renderStars()}
      </div>
      <div className="text-center">
        {selectedRating > 0 && (
          <span className="text-sm text-gray-400 animate-fade-in">
            {translations.ratings[selectedRating as keyof typeof translations.ratings]}
          </span>
        )}
      </div>
    </div>
  );
};

export default StarRating;

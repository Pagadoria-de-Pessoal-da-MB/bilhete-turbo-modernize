
import React, { useState, useEffect } from 'react';

const images = [
  "/public/lovable-uploads/bceebf65-9025-4330-aad5-ef300d02b2ac.png",
  "/public/lovable-uploads/04798dd7-3215-4664-bd12-a2edbf4f02f5.png",
  "/public/lovable-uploads/2246b185-c70e-468b-bf5d-3d94e5af2133.png"
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-full relative">
      <div className="h-48 w-full overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-2 absolute bottom-2 left-0 right-0">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 mx-1 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

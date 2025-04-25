
import React, { useState, useEffect } from 'react';

const images = [
  "/public/lovable-uploads/c9ea390d-834a-42ab-8a80-2b0b8cf8a7f0.png",
  "/public/lovable-uploads/e3b6b131-e79e-436b-9e50-0d5ae3234810.png",
  "/public/lovable-uploads/0c83530e-67c5-426e-ae1b-9e11246ef926.png"
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

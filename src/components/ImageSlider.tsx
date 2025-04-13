
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  "/public/lovable-uploads/bceebf65-9025-4330-aad5-ef300d02b2ac.png",
  "/public/lovable-uploads/04798dd7-3215-4664-bd12-a2edbf4f02f5.png",
  "/public/lovable-uploads/2246b185-c70e-468b-bf5d-3d94e5af2133.png"
];

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    customPaging: (i: number) => (
      <div 
        style={{
          width: '10px', 
          height: '10px', 
          borderRadius: '50%', 
          background: 'white',
          opacity: 0.3,
          margin: '0 5px'
        }} 
      />
    )
  };

  return (
    <div className="w-full max-w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-48 w-full overflow-hidden rounded-lg">
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

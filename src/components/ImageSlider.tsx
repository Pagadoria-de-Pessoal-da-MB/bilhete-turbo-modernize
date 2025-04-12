
import { useEffect, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/public/lovable-uploads/bceebf65-9025-4330-aad5-ef300d02b2ac.png",
  "/public/lovable-uploads/04798dd7-3215-4664-bd12-a2edbf4f02f5.png",
  "/public/lovable-uploads/2246b185-c70e-468b-bf5d-3d94e5af2133.png"
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    // Auto slide effect
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Carousel className="w-full max-w-full" value={activeIndex} onValueChange={setActiveIndex}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="h-48 w-full overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === activeIndex ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </Carousel>
  );
}

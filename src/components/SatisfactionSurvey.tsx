
import { useState } from 'react';
import { Star } from 'lucide-react';
import { toast } from "sonner";

export default function SatisfactionSurvey() {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  
  const handleRate = (value: number) => {
    setRating(value);
    toast.success("Obrigado pela sua avaliação!");
  };
  
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 animate-fade-in">
      <h3 className="text-white font-medium mb-2 text-center">Avalie nosso serviço</h3>
      <div className="flex justify-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(null)}
            onClick={() => handleRate(star)}
            className="transition-transform hover:scale-110"
          >
            <Star
              className={`h-8 w-8 ${
                (hoverRating !== null ? star <= hoverRating : star <= (rating || 0))
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-400"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

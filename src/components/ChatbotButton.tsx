
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

export default function ChatbotButton() {
  const handleChatOpen = () => {
    toast.info("Chat iniciado. Um assistente virtual entrará em contato em breve.");
  };
  
  return (
    <Button 
      onClick={handleChatOpen}
      className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-blue-500 shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center p-0 border-2 border-white animate-pulse-slow"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
}


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
      className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-papem-blue shadow-lg flex items-center justify-center p-0 hover:bg-papem-light"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
}

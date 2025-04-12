
import { useState, useEffect } from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface PaymentAlertProps {
  nextPayment?: string;
}

export const PaymentAlert = ({ nextPayment }: PaymentAlertProps) => {
  const [date, setDate] = useState<string>('');
  
  useEffect(() => {
    // Se houver data fornecida via props, use-a
    if (nextPayment) {
      setDate(nextPayment);
    } else {
      // Caso contrário, calcule a data para o próximo dia 5
      const today = new Date();
      const nextMonth = today.getDate() > 5 ? today.getMonth() + 1 : today.getMonth();
      const nextYear = nextMonth > 11 ? today.getFullYear() + 1 : today.getFullYear();
      const nextPaymentDate = new Date(nextMonth > 11 ? 0 : nextMonth, 5, nextYear);
      
      // Formatar data para o estilo brasileiro
      setDate(nextPaymentDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }));
    }
  }, [nextPayment]);

  return (
    <Card className="overflow-hidden bg-gradient-to-r from-papem-blue to-papem-dark text-white shadow-lg animate-fade-in">
      <div className="p-3 flex items-center gap-3">
        <div className="rounded-full bg-white/10 p-2">
          <Calendar className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Próximo Bilhete de Pagamento</p>
          <p className="text-lg font-bold">{date}</p>
        </div>
        <AlertCircle className="h-5 w-5 text-yellow-300 animate-pulse-slow" />
      </div>
    </Card>
  );
};

export default PaymentAlert;

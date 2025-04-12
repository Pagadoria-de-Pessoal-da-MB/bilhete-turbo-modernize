
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

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
    <div className="bg-white/5 backdrop-blur-sm text-white rounded-lg p-3 shadow-sm border border-white/10 animate-fade-in">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-yellow-300" />
        <span className="text-xs font-light">Próximo Bilhete:</span>
        <span className="text-sm font-medium">{date}</span>
      </div>
    </div>
  );
};

export default PaymentAlert;

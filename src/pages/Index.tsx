
import { Calendar, Wallet, Building, FileText, HelpCircle, FileSpreadsheet, Info } from 'lucide-react';
import Header from '@/components/Header';
import PaymentAlert from '@/components/PaymentAlert';
import MenuItem from '@/components/MenuItem';

const Index = () => {
  const menuItems = [
    { icon: <Wallet className="h-5 w-5 text-papem-blue" />, title: 'BP On-line', link: '/bp-online' },
    { icon: <Building className="h-5 w-5 text-papem-blue" />, title: 'SouGov.br', link: '/sougov' },
    { icon: <Building className="h-5 w-5 text-papem-blue" />, title: 'Bancos Conveniados', link: '/bancos' },
    { icon: <FileText className="h-5 w-5 text-papem-blue" />, title: 'e-Consig', link: '/econsig' },
    { icon: <HelpCircle className="h-5 w-5 text-papem-blue" />, title: 'Educação Financeira', link: '/educacao' },
    { icon: <Info className="h-5 w-5 text-papem-blue" />, title: 'Informações', link: '/informacoes' },
    { icon: <FileSpreadsheet className="h-5 w-5 text-papem-blue" />, title: 'IRPF', link: '/irpf' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      
      <div className="bg-digital-pattern h-48 flex items-center justify-center p-4 relative">
        <div className="absolute inset-0 bg-navy-dark/70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-2">SISPAG</h2>
          <p className="text-sm font-light">PAGADORIA DE PESSOAL DA MARINHA</p>
          <div className="mt-4 flex justify-center">
            <div className="bg-yellow-500/30 p-1 rounded-full">
              <img src="/public/lovable-uploads/bceebf65-9025-4330-aad5-ef300d02b2ac.png" alt="Emblema" className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 -mt-5 relative z-20">
        <PaymentAlert nextPayment="05/05/2025" />
      </div>
      
      <div className="flex-1 p-4 space-y-3">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            link={item.link}
            className={`bg-papem-blue shadow-md animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;

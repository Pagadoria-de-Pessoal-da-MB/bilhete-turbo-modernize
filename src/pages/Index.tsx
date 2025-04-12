
import { Calendar, Wallet, Building, FileText, HelpCircle, FileSpreadsheet, Info } from 'lucide-react';
import Header from '@/components/Header';
import PaymentAlert from '@/components/PaymentAlert';
import MenuItem from '@/components/MenuItem';
import ImageSlider from '@/components/ImageSlider';
import SatisfactionSurvey from '@/components/SatisfactionSurvey';
import ChatbotButton from '@/components/ChatbotButton';

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
      
      <div className="bg-navy-dark relative">
        <ImageSlider />
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-navy-dark/50 backdrop-blur-sm">
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold mb-2">SISPAG</h2>
            <p className="text-sm font-light">PAGADORIA DE PESSOAL DA MARINHA</p>
            <div className="mt-4 flex justify-center">
              <div className="bg-yellow-500/30 p-1 rounded-full">
                <img src="/public/lovable-uploads/bceebf65-9025-4330-aad5-ef300d02b2ac.png" alt="Emblema" className="h-12 w-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-3 bg-papem-gradient">
        <PaymentAlert nextPayment="05/05/2025" />
      </div>
      
      <div className="flex-1 p-4 space-y-3 bg-gradient-to-b from-papem-dark to-navy-dark">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            link={item.link}
            className="bg-papem-blue/90 shadow-md animate-fade-in"
            delay={`${index * 0.1}s`}
          />
        ))}
      </div>
      
      <div className="p-4 bg-navy-dark">
        <SatisfactionSurvey />
      </div>
      
      <ChatbotButton />
    </div>
  );
};

export default Index;

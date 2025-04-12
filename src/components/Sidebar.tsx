
import { Home, Wallet, Building, FileText, HelpCircle, FileSpreadsheet, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const menuItems = [
    { icon: <Home className="h-5 w-5 text-papem-blue" />, title: 'Início', link: '/' },
    { icon: <Wallet className="h-5 w-5 text-papem-blue" />, title: 'BP On-line', link: 'https://bponline.papem.mar.mil.br/bponline/login', externalLink: true },
    { icon: <Building className="h-5 w-5 text-papem-blue" />, title: 'SouGov.br', link: '/sougov' },
    { icon: <Building className="h-5 w-5 text-papem-blue" />, title: 'Bancos Conveniados', link: '/bancos' },
    { icon: <FileText className="h-5 w-5 text-papem-blue" />, title: 'e-Consig', link: '/econsig' },
    { icon: <HelpCircle className="h-5 w-5 text-papem-blue" />, title: 'Educação Financeira', link: '/educacao' },
    { icon: <Info className="h-5 w-5 text-papem-blue" />, title: 'Informações', link: '/informacoes' },
    { icon: <FileSpreadsheet className="h-5 w-5 text-papem-blue" />, title: 'IRPF', link: '/irpf' },
  ];

  return (
    <div className="flex flex-col h-full bg-papem-gradient">
      <div className="p-4 flex justify-center items-center border-b border-white/10">
        <Link to="/" className="flex flex-col items-center">
          <h2 className="text-white text-xl font-bold">SISPAG</h2>
          <p className="text-white/80 text-xs mt-1">PAGADORIA DE PESSOAL DA MARINHA</p>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {menuItems.map((item, index) => (
          item.externalLink ? (
            <a
              key={index}
              href={item.link}
              target="_self"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors text-white"
            >
              <div className="bg-white rounded-full p-2 flex items-center justify-center">
                {item.icon}
              </div>
              <span>{item.title}</span>
            </a>
          ) : (
            <Link
              key={index}
              to={item.link}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors text-white"
            >
              <div className="bg-white rounded-full p-2 flex items-center justify-center">
                {item.icon}
              </div>
              <span>{item.title}</span>
            </Link>
          )
        ))}
      </div>
      
      <div className="p-4 border-t border-white/10">
        <Link to="/privacidade" className="text-white/70 text-sm hover:text-white transition-colors">
          Política de Privacidade
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

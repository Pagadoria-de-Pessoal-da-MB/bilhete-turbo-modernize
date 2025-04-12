
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const SouGov = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header title="SouGov.br" />
      
      <div className="p-4 bg-navy-light text-white">
        <h2 className="text-lg font-bold">SouGov.br</h2>
        <p className="text-sm opacity-80">Portal de serviços para servidores públicos</p>
      </div>
      
      <div className="p-4 flex-1 flex flex-col items-center">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full text-center">
          <img src="public/lovable-uploads/2246b185-c70e-468b-bf5d-3d94e5af2133.png" alt="SouGov.br" className="h-16 mx-auto mb-4" />
          
          <p className="text-gray-600 mb-6">
            Acesse o aplicativo SouGov.br para consultar seus dados funcionais, contracheques, agendar férias e muito mais.
          </p>
          
          <Button className="bg-papem-blue hover:bg-navy w-full flex items-center justify-center gap-2">
            Acessar SouGov.br <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
        
        <div className="mt-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2 text-papem-blue">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SouGov;

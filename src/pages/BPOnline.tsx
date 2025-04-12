
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Eye, Printer } from "lucide-react";
import { Link } from "react-router-dom";

const BPOnline = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header title="BP On-line" />
      
      <div className="p-4 bg-navy-light text-white">
        <h2 className="text-lg font-bold">Bilhete de Pagamento</h2>
        <p className="text-sm opacity-80">Consulte e baixe seus bilhetes de pagamento</p>
      </div>
      
      <div className="p-4 flex-1">
        <Card className="p-4 shadow-md">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-medium">Abril/2025</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span className="hidden sm:inline">Visualizar</span>
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Baixar</span>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-medium">Março/2025</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span className="hidden sm:inline">Visualizar</span>
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Baixar</span>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-medium">Fevereiro/2025</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span className="hidden sm:inline">Visualizar</span>
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Baixar</span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Printer className="h-4 w-4" />
              Imprimir todos
            </Button>
          </div>
        </Card>
        
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

export default BPOnline;


import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-papem-gradient p-4">
      <div className="text-center text-white">
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Página não encontrada</p>
        <Link to="/">
          <Button className="bg-white text-papem-blue hover:bg-white/90">
            <Home className="mr-2 h-4 w-4" /> Voltar ao Início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

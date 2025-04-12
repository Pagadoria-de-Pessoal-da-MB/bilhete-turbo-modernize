
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Sidebar } from './Sidebar';

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "PAPEM" }: HeaderProps) => {
  return (
    <header className="bg-header-gradient py-3 px-4 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 bg-papem-blue border-none">
            <Sidebar />
          </SheetContent>
        </Sheet>
        
        <h1 className="text-white text-xl font-bold text-center flex-1">{title}</h1>
        
        <div className="w-10 invisible">
          {/* Espaço para balancear o layout */}
        </div>
      </div>
    </header>
  );
};

export default Header;

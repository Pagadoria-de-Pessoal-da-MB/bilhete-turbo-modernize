
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  className?: string;
}

const MenuItem = ({ icon, title, link, className }: MenuItemProps) => {
  return (
    <Link
      to={link}
      className={cn(
        "flex items-center justify-between rounded-xl p-3 bg-white/10 backdrop-blur-sm text-white transition-all hover:bg-white/20",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-full p-2 flex items-center justify-center w-10 h-10">
          {icon}
        </div>
        <span className="font-medium">{title}</span>
      </div>
      <ChevronRight className="h-5 w-5 text-white/70" />
    </Link>
  );
};

export default MenuItem;

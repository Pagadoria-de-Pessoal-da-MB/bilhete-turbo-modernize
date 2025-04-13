
import { ArrowLeft, Lock, RotateCw, Share } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface MobileAppBrowserProps {
  url: string;
  title: string;
}

const MobileAppBrowser = ({ url, title }: MobileAppBrowserProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [url]);

  const handleBackButton = () => {
    // Navigate to home page
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Browser top bar with time, signal, battery */}
      <div className="bg-gray-800 text-white p-2 text-xs flex justify-between items-center">
        <div>18:56</div>
        <div className="flex items-center gap-1">
          <span>4G</span>
          <div className="w-6 h-3 bg-yellow-500 rounded-sm" />
        </div>
      </div>

      {/* Browser address bar */}
      <div className="bg-gray-300 p-2 flex items-center justify-between">
        <Lock className="h-4 w-4 text-gray-600" />
        <div className="flex-1 mx-2 text-center text-sm text-gray-600 truncate">
          {url.replace('https://', '')}
        </div>
        <RotateCw className="h-4 w-4 text-gray-600" />
      </div>

      {/* Navigation bar with back button and title */}
      <div className="border-b border-gray-300 p-3 flex items-center">
        <button 
          onClick={handleBackButton} 
          className="text-blue-600"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1 text-center font-medium text-blue-600">{title}</div>
      </div>

      {/* Content area - iframe or webview simulation */}
      <div className="flex-1 overflow-hidden relative">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <iframe 
            src={url} 
            className="w-full h-full border-none" 
            title={title}
            sandbox="allow-scripts allow-same-origin"
          />
        )}
      </div>

      {/* Bottom browser navigation */}
      <div className="bg-gray-100 p-2 flex justify-around items-center border-t border-gray-300">
        <button onClick={handleBackButton} className="text-gray-500">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="h-5 w-5 rotate-180 text-gray-500">
          <ArrowLeft className="h-5 w-5" />
        </div>
        <Share className="h-5 w-5 text-gray-500" />
        <div className="h-5 w-5 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className="h-5 w-5 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MobileAppBrowser;

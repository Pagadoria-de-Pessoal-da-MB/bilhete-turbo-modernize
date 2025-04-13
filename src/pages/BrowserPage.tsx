
import { useSearchParams } from 'react-router-dom';
import MobileAppBrowser from '@/components/MobileAppBrowser';

const BrowserPage = () => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get('url') || '';
  const title = searchParams.get('title') || 'Web Browser';

  return <MobileAppBrowser url={url} title={title} />;
};

export default BrowserPage;

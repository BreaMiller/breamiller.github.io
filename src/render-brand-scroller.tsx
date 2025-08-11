import { createRoot } from 'react-dom/client';
import brand-scroller-content from './components/brand-scroller';

const rootElement = document.getElementById('brand-scroller-root');

if (rootElement) {
  createRoot(rootElement).render(<BrandScrollerCntent />);
}

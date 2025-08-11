import { createRoot } from 'react-dom/client';
import BrandScrollerContent from './components/BrandScroller';

const rootElement = document.getElementById('brand-scroller-root');

if (rootElement) {
  createRoot(rootElement).render(<BrandScrollerContent />);
}

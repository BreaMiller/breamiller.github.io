import { createRoot } from 'react-dom/client';
import BrandScrollerContent from './components/BrandScroller';

const rootElement = document.getElementById('Brand-Scroller-root');

if (rootElement) {
  createRoot(rootElement).render(<BrandScrollerContent />);
}

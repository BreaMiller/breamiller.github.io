import { createRoot } from 'react-dom/client';
import BrandScrollerContent from './components/BrandScroller'; // Corrected import path

const rootElement = document.getElementById('BrandScroller-root');

if (rootElement) {
  createRoot(rootElement).render(<BrandScrollerContent />);
}

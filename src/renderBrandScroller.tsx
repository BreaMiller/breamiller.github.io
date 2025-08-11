import { createRoot } from 'react-dom/client';
import brand-scroller-content from './components/brand-scroller'; // Corrected import path

const rootElement = document.getElementById('brand-scroller-root');

if (rootElement) {
  createRoot(rootElement).render(<brand-scroller-content />);
}

import { createRoot } from 'react-dom/client';
import '../css/index.css';
import App from '../components/app'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
})


import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force rebuild to resolve bun install timeout - attempt 2
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}

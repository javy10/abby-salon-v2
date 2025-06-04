
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force rebuild to resolve bun install timeout
createRoot(document.getElementById("root")!).render(<App />);

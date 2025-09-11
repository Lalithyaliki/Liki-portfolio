import { StrictMode } from 'react'
import { HashRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)

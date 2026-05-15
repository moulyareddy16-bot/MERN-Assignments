import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './contexts/ContextProvider.jsx';
import { configureEnv } from './env.js';

configureEnv();

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>

  //</StrictMode>,
)

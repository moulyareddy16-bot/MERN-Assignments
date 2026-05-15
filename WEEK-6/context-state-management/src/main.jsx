import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterStore from './contexts/CounterContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterStore>
    <App />
    </CounterStore>
  </StrictMode>,
)

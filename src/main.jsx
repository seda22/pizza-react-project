import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// reset.css buraya import edilir mi edilmeli mi?
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

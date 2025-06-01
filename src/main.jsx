import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Acceuil from './Pages/Acceuil.jsx'
import Decouverte from './Pages/Decouverte.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Acceuil/>
    <Decouverte/>
  </StrictMode>,
)

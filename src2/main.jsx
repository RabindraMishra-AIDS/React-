import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Fun from './Fun.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fun />
  </StrictMode>,
)

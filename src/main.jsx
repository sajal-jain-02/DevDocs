import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2000,
        style: {
          background: "#1f2937",
          color: "#fff",
          border: "1px solid #374151",
          borderRadius: "12px",
        },
      }}
    />
  </StrictMode>,
)

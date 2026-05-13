import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GradineWebsite from './GradineWebsite.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GradineWebsite />
  </React.StrictMode>
)

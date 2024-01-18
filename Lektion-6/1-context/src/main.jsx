import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import ThemeContextProvider from './contexts/ThemeContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
)



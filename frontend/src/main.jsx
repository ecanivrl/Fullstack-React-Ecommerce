import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'

ReactDOM.createRoot(document.getElementById('ecanivrl')).render(
  <React.StrictMode>
    <MainLayout>
    <App />
    </MainLayout>
  </React.StrictMode>,
)

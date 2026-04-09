import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppV2 from './AppV2'
import './index.css'

const isV2 = window.location.pathname === '/v2' || window.location.pathname === '/v2/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isV2 ? <AppV2 /> : <App />}
  </React.StrictMode>,
)

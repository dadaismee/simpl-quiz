import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const documentHeight = () => {
  const doc = document.getElementById('root');
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
}

window.addEventListener('resize', documentHeight);
documentHeight();
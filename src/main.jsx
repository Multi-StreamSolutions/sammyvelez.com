import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const mountNode = document.getElementById('app')

if (!mountNode) {
  throw new Error('Sammy Velez site mount node was not found')
}

createRoot(mountNode).render(
  <StrictMode><App /></StrictMode>,
)

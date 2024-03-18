import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { SocketContextProvider } from './context/SocketContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
   <SocketContextProvider>
        <App />
   </SocketContextProvider>

   
)

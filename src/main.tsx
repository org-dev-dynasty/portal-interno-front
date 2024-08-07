import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { ClientContextProvider } from './app/context/client_context.tsx'
import AppRoutes from './app/routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClientContextProvider>
      <AppRoutes />
    </ClientContextProvider>
  </React.StrictMode>,
)

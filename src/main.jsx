import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styling/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import queryClient from './queryclient'
import AuthProvider from './contexts/AuthContext'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)

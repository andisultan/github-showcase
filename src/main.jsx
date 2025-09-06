import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './components/layout'
import Home from './pages/home'
import './assets/sass/style.scss'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Home/>
      </QueryClientProvider>
    </Layout>
  </StrictMode>,
)

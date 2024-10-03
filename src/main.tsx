import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import store from '@store/index.ts'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <App />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)

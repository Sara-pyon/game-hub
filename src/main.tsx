import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme.ts'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routes.tsx'

const queryClient = new QueryClient;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers} />
      <ReactQueryDevtools />
    </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)

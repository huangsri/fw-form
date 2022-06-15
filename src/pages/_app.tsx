import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ThemeProvider } from '@/lib/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp

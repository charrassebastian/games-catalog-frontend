import './App.css'
import { WelcomeScreen } from './WelcomeScreen/WelcomeScreen'

/**
 * TANSTACK CONNECTION TO THE BACKEND FROM THE FRONTEND
 */
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
      <QueryClientProvider client={queryClient}>
        <WelcomeScreen />
      </QueryClientProvider>

  )
}

export default App
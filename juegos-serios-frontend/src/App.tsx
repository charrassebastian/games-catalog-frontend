import './App.css'
import { WelcomeScreen } from './WelcomeScreen/WelcomeScreen'
import { Login } from './Login/Login'

/**
 * TANSTACK CONNECTION TO THE BACKEND FROM THE FRONTEND
 */
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  const isLoggedIn = true; /*CAMBIAR A 'false' para poder ver login*/

    return (

    <div className="container">
    {isLoggedIn ? 
      <QueryClientProvider client={queryClient}>
      <WelcomeScreen />
      </QueryClientProvider>
      : <Login />}
    </div>
      

  )
}

export default App
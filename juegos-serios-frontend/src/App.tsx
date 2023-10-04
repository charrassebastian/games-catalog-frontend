<<<<<<< HEAD
import './App.css'
import { WelcomeScreen } from './WelcomeScreen/WelcomeScreen'
import { Login } from './Login/Login'
=======
import { AuthProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { WelcomeScreen } from './WelcomeScreen/WelcomeScreen';
>>>>>>> 318adf757cad6ad1e84c01239d14074a0e32cad7

const queryClient = new QueryClient();

function App() {
<<<<<<< HEAD
  const isLoggedIn = true; /*CAMBIAR A 'false' para poder ver login*/

    return (

    <div className="container">
    {isLoggedIn ? 
=======
  return (
    <AuthProvider>
>>>>>>> 318adf757cad6ad1e84c01239d14074a0e32cad7
      <QueryClientProvider client={queryClient}>
      <WelcomeScreen />
      </QueryClientProvider>
<<<<<<< HEAD
      : <Login />}
    </div>
      

  )
=======
    </AuthProvider>
  );
>>>>>>> 318adf757cad6ad1e84c01239d14074a0e32cad7
}

export default App;
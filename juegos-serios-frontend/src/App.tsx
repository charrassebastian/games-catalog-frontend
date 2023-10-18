import { Login } from './Login/Login';
import { AuthProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { WelcomeScreen } from './WelcomeScreen/WelcomeScreen';

const queryClient = new QueryClient();

function App() {
  const isLoggedIn = true; /*CAMBIAR A 'false' para poder ver login*/

  return (
    <>
      {isLoggedIn ?
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <WelcomeScreen isLoggedIn={isLoggedIn}/>
          </QueryClientProvider>
        </AuthProvider>
        : <Login />}
    </>
  )
}

export default App;
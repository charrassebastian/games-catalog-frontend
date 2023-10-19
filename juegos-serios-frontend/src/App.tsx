import { AuthProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { WelcomeScreen } from './WelcomeScreen/WelcomeScreen';

const queryClient = new QueryClient();

function App() {
  return (
    <>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <WelcomeScreen/>
          </QueryClientProvider>
        </AuthProvider>
    </>
  )
}

export default App;
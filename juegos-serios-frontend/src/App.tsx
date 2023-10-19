import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { WelcomeScreen } from './WelcomeScreen/WelcomeScreen';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <WelcomeScreen />
      </QueryClientProvider>
    </>
  )
}

export default App;
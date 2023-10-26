import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { MainScreen } from './MainScreen/MainScreen';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainScreen />
      </QueryClientProvider>
    </>
  )
}

export default App;
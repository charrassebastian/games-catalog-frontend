import React from 'react';
import { AuthProvider } from './contexts/AuthContext'; // Asegúrate de ajustar la ruta correcta al AuthContext
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { WelcomeScreen } from './WelcomeScreen/WelcomeScreen';

const queryClient = new QueryClient();

function App() {
  return (
    // Integra el proveedor del contexto de autenticación y el proveedor de React Query alrededor de tus componentes
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <WelcomeScreen />
        {/* Otros componentes */}
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
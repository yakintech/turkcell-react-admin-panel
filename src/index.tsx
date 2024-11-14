import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

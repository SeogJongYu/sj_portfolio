import {ReactNode} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';

import './App.scss';

import apiQuery from './api/apiQuery';
import Home from './pages/home/Home';

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: apiQuery,
    },
  },
});

function Providers({children}: {children: ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default App;

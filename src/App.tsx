import {ReactNode} from 'react';
import {Routes, Route, HashRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';

import './App.scss';

import apiQuery from './api/apiQuery';
import Home from './pages/home/Home';

function App() {
  return (
    <Providers>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
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

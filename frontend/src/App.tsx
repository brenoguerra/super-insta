import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/auth';

import Home from './pages/Home';

import Routes from './routes';

const App: React.FC = () => (
  // <BrowserRouter>
  //   <AuthProvider>
  //     <Routes />
  //   </AuthProvider>

  //   <GlobalStyle />
  // </BrowserRouter>

  <>
    <Home />
    <GlobalStyle />
  </>
);

export default App;

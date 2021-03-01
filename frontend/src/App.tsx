import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/auth';

import Feed from './pages/Feed';

import Routes from './routes';

const App: React.FC = () => (
  // <BrowserRouter>
  //   <AuthProvider>
  //     <Routes />
  //   </AuthProvider>

  //   <GlobalStyle />
  // </BrowserRouter>

  <>
    <Feed />
    <GlobalStyle />
  </>
);

export default App;

import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;

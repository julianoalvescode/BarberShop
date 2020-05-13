import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes/routes';
import history from './services/history';

import GlobalStyle from './styles/generic';

function App() {
    return (
        <>
          <GlobalStyle />
          <Router history={history}>
                <Routes />
           </Router>
        </>
    );
}

export default App;

import React from 'react';
import { Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './config/ReactotronConfig';

import Routes from './routes/routes';
import history from './services/history';

import GlobalStyle from './styles/generic';

function App() {
    return (
        <>
            <GlobalStyle />
            <Helmet>
                <title>Barber Shop</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Router history={history}>
                <Routes />
            </Router>
        </>
    );
}

export default App;

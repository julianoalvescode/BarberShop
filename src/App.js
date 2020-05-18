import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';
import { store, persistor } from './store';

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
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router history={history}>
                        <Routes />
                    </Router>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;

import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistedReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;
const sagaMiddlawere = createSagaMiddleware({ sagaMonitor });

const middlaweres = [sagaMiddlawere];

const store = createStore(persistedReducers(rootReducer), middlaweres);
const persistor = persistStore(store);

sagaMiddlawere.run(rootSaga);

export { store, persistor };

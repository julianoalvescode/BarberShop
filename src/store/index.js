import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;
const sagaMiddlawere = createSagaMiddleware({ sagaMonitor });

const middlaweres = [sagaMiddlawere];

const store = createStore(rootReducer, middlaweres);

sagaMiddlawere.run(rootSaga);

export default store;

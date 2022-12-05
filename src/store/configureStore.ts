import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { IS_PRODUCTION } from 'utils/constants';

import { configureStore } from '@reduxjs/toolkit';

import { createReducer } from './reducers';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  let middlewares = [sagaMiddleware];

  // LOG ONLY IN DEVELOPMENT/STAGING PRODUCTION OPTIMIZATIONS
  if (IS_PRODUCTION) {
    middlewares = [...middlewares];
  }
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        createLogger({
          collapsed: true,
          duration: true,
          timestamp: true,
        }),
        ...middlewares,
      ),
    devTools:
      /* istanbul ignore next line */
      IS_PRODUCTION || process.env.PUBLIC_URL.length > 0,
    enhancers,
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      forceReducerReload(store);
    });
  }

  return store;
}

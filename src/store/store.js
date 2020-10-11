import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { logger } from 'redux-logger';

import { configurePersist } from './localstorage-middleware.js';
import rootReducer from './root-reducer.js';

const devMode = process.env.NODE_ENV === `development`;

const composeEnhancers =
  (process.browser &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const { load, save } = configurePersist();
const middlewares = [save];

if (devMode) {
  middlewares.push(logger);
}

const makeStore = () => {
  const store = createStore(
    rootReducer,
    load(rootReducer()),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });

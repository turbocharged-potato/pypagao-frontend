import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();

  middlewares.push(loggerMiddleware);
}

const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));

export default configureStore;

import { createStore,applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

const middlewares = [ createLogger()];
export default createStore(
  rootReducer,
  undefined,
  compose(  applyMiddleware(...middlewares),  //applymiddleware returns and array so ... is reqd
            window.devToolsExtension ? window.devToolsExtension() : f => f
          )
);
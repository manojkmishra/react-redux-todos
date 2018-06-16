import { createStore,applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [ createLogger(), thunk];
export default createStore(
  rootReducer,
  undefined,
  compose(  applyMiddleware(...middlewares),  //applymiddleware returns and array so ... is reqd
            window.devToolsExtension ? window.devToolsExtension() : f => f
          )
);
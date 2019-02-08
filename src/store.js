import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const allEnhancers = compose (
  applyMiddleware (thunk),
  window.devToolsExtension && window.devToolsExtension ()
);

const store = createStore (reducer, allEnhancers);
export default store;

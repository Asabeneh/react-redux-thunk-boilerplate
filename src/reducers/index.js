import {combineReducers} from 'redux';
import postReducer from './postReducer';
import todoReducer from './todoReducer';
import operationReducer from './operationReducer';

export default combineReducers ({
  post: postReducer,
  todo: todoReducer,
  count: operationReducer,
});

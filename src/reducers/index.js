import { combineReducers } from 'redux';
import todos from './todos';

export default combineReducers(
{  //todos: () => [] //function returing an empty array
  todos
});
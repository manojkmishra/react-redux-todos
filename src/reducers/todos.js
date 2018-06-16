import { CREATE_TODO,} from '../actions/todos';
import uuid from 'uuid/v4';

export default (state = [], action) => 
{ // console.log('/src/reducer/todos.js-action.type=', action.type)
  console.log('/src/reducer/todos.js-previous state=', state)
  console.log('/src/reducer/todos.js-action=', action)
  switch (action.type) 
  {  case CREATE_TODO: return [ ...state, {id: uuid() , text: action.text, completed: false} ] 
     default:  return state;
  }
 
};

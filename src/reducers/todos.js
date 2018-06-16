import { CREATE_TODO,COMPLETED_TODO} from '../actions/todos';
import uuid from 'uuid/v4';

export default (state = [], action) => 
{ // console.log('/src/reducer/todos.js-action.type=', action.type)
  console.log('/src/reducer/todos.js-previous state=', state)
  console.log('/src/reducer/todos.js-action=', action)
  switch (action.type) 
  {  case CREATE_TODO: 
       return [ ...state, {id: uuid() , text: action.text, completed: false} ] 
     case COMPLETED_TODO: 
       return state.map(todo=>(todo.id === action.id ? { ...todo, completed: !todo.completed} : todo), ) 
       //so id sent from action--map it to one item--if id=action.id--we keep todo(id,text)--toggle completed---else return all todo
     default:  return state;
  }
 
};

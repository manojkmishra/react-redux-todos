import { CREATE_TODO,CREATE_TODO_SUCCESS,CREATE_TODO_ERROR,
         FETCH_TODOS, FETCH_TODOS_ERROR, FETCH_TODOS_SUCCESS,
         COMPLETED_TODO,DELETED_TODO,DELETED_ALL_COMPLETED_TODO} from '../actions/todos';


const initialState = { data: [], error: null, isFetched: false}  //to show loading screen

export default (state = initialState, action) => 
{ // console.log('/src/reducer/todos.js-action.type=', action.type)
  console.log('/src/reducer/todos.js-previous state=', state)
  console.log('/src/reducer/todos.js-action=', action)
  switch (action.type) 
  {  case FETCH_TODOS: return state;
     case FETCH_TODOS_SUCCESS: return { ...state, data: action.data, isFetched: true }
     case FETCH_TODOS_ERROR: return { ...state, isFetched: true,  error: action.error, }
     case CREATE_TODO: return state;
     //  return [ ...state, {id: uuid() , text: action.text, completed: false} ] 
     case CREATE_TODO_SUCCESS: return { ...state, isFetched: true, data: [ ...state.data, action.data] }
     case CREATE_TODO_ERROR: return { ...state, isFetched: true,  error: action.error, }
     case COMPLETED_TODO: 
       return state.map(todo=>(todo.id === action.id ? { ...todo, completed: !todo.completed} : todo), ) 
       //so id sent from action--map it to one item--if id=action.id--we keep todo(id,text)--toggle completed---else return all todo
     case DELETED_TODO: 
       return state.filter(todo=>todo.id !==action.id) //return all but one which is clicked
     case DELETED_ALL_COMPLETED_TODO:
       return state.filter(todo => !todo.completed);
     default:  return state;
  }
 
};

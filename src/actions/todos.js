import uuid from 'uuid/v4';
import TodoApi from '../utils/api/todoApi';

export const CREATE_TODO = 'CREATE_TODO'; export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS'; export const CREATE_TODO_ERROR = 'CREATE_TODO_ERROR';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const DELETED_TODO = 'DELETED_TODO';
export const DELETED_ALL_COMPLETED_TODO = 'DELETED_ALL_COMPLETED_TODO';
export const FETCH_TODOS = 'FETCH_TODOS'; export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'; export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

export function fetchTodos() 
{ console.log('/src/actions/todos.js-type:FETCH_TODOS')
  return async (dispatch) => 
  { dispatch({ type: FETCH_TODOS });
    try {  const data = await TodoApi.getAllTodo();
           return dispatch({ type: FETCH_TODOS_SUCCESS, data });
        } 
    catch (error) {  return dispatch({  type: FETCH_TODOS_ERROR, error, });  }
  }
}

export function createTodo(text) //fn taking text as argument, returns an object with type of create todo and a text
{  console.log('/src/actions/todos.js-type:CREATE_TODO text=', text)
 //  return {  type: CREATE_TODO,  text  }
   return async (dispatch) => 
   { const todo = { text, id: uuid(), completed: false  }
     dispatch({ type: CREATE_TODO, todo });
     try { const data= await TodoApi.createTodo(todo);
           return dispatch({ type: CREATE_TODO_SUCCESS, data });
         } 
     catch (error) {  return dispatch({ type: CREATE_TODO_ERROR, error, todo }); }
   }
}

export function completedTodo(id) 
{ console.log('/src/actions/todos.js-type:COMPLETED_TODO id=', id)
  return {  type: COMPLETED_TODO,  id}
}

export function deletedTodo(id) 
{ console.log('/src/actions/todos.js-type:DELETED_TODO id=', id)
  return {  type: DELETED_TODO,  id}
}

export function deletedAllCompletedTodo() 
{ console.log('/src/actions/todos.js-type:DELETED_ALL_COMPLETED_TODO')
   return {   type: DELETED_ALL_COMPLETED_TODO,  } 
}

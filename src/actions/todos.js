export const CREATE_TODO = 'CREATE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const DELETED_TODO = 'DELETED_TODO';
export const DELETED_ALL_COMPLETED_TODO = 'DELETED_ALL_COMPLETED_TODO';

export function createTodo(text) //fn taking text as argument, returns an object with type of create todo and a text
{  console.log('/src/actions/todos.js-type:CREATE_TODO text=', text)
   return {  type: CREATE_TODO,  text  }
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

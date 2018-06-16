export const CREATE_TODO = 'CREATE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';

export function createTodo(text) //fn taking text as argument, returns an object with type of create todo and a text
{  console.log('/src/actions/todos.js-type:CREATE_TODO text=', text)
   return {  type: CREATE_TODO,  text  }
}

export function completedTodo(id) 
{ console.log('/src/actions/todos.js-type:COMPLETED_TODO id=', id)
  return {  type: COMPLETED_TODO,  id}
}

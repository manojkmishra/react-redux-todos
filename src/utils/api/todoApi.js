import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

class TodoApi 
{ constructor() {  this.path = '/todos';  }
  async getAllTodo() 
  { try {  const { data } = await axios.get(this.path);
           console.log('/utils/api/todoapi.js-getAllTodo-data=',data);
           return data;
        } catch (e) { return e;  }
  }
  async createTodo(args) 
  { try {  const { data } = await axios.post(this.path, args);
           console.log('/utils/api/todoapi.js-createTodo-data=',data);
           return data;
        } catch (e) {   throw e; }
  }
}

export default new TodoApi();

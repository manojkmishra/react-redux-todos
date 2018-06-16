import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

class TodoApi 
{ constructor() {  this.path = '/todos';  }
  async getAllTodo() 
  { try {  const { data } = await axios.get(this.path);
           return data;
        } catch (e) { return e;  }
  }
  async createTodo(args) 
  { try {  const { data } = await axios.post(this.path, args);
           return data;
        } catch (e) {   throw e; }
  }
}

export default new TodoApi();

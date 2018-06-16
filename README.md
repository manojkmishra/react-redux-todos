## react-redux-todos (reactJS, redux)

### Installation steps


### Development steps
-npm i -g create-react-app  
-create-react-app react-redux-todos

#### send to github
-git init  
-git remote add origin https://github.com/manojkmishra/react-redux-todos.git  
-git push -u --force origin master  

#### start the server  
-npm start  
below screen will be visible in browser  
![enter image description here](https://github.com/manojkmishra/react-redux-todos/blob/master/screenshots/screen1.PNG)  

#### add redux  
-yarn add redux react-redux  
-Add 'react dev tools' and 'redux dev tools' in your chrome browser for troubleshooting    
![enter image description here](https://github.com/manojkmishra/react-redux-todos/blob/master/screenshots/reactnreduxdevtools.PNG) 
-create /src/reducer/index.js  
```
      import { combineReducers } from 'redux';  
      export default combineReducers(  
      {  todos: () => [] //function returing an emtry array  
      });  
```
-create /src/store.js  
```
      import { createStore, compose } from 'redux';  
      import rootReducer from './reducers';  
      export default createStore(  
        rootReducer,  
        undefined,  
        compose(   window.devToolsExtension ? window.devToolsExtension() : f => f  
                )  
      );  
```
-modify index.js to connect redux  
```
      import React from 'react';  
      import ReactDOM from 'react-dom';  
      import './index.css';  
      import App from './App';  
      import registerServiceWorker from './registerServiceWorker';  
      import { Provider } from 'react-redux';  //connect react with redux  
      import store from './store';  
      ReactDOM.render(<Provider store={store}> <App /> </ Provider>,    
          document.getElementById('root')  
      );  
registerServiceWorker();  
```
#### add middleware   
-yarn add -D redux-logger (to add console logs for all redux activity)  
-add middleware in store.js  

#### CREATE_TODO
-create /src/actions folder and todos.js file  
```
      export const CREATE_TODO = 'CREATE_TODO';  
      export function createTodo(text) //fn taking text as argument, returns an object with type of create todo and a text 
      {  console.log('/src/actions/todos.js-type:CREATE_TODO text=', text)  
        return {  type: CREATE_TODO,  text  }  
      }  
```
-create /src/reducers/todos.js  
```
      import { CREATE_TODO,} from '../actions/todos';  
      import uuid from 'uuid/v4';  
      export default (state = [], action) =>   
      { console.log('/src/reducer/todos.js-action=', action)  
        console.log('/src/reducer/todos.js-action.type=', action.type)  
        console.log('/src/reducer/todos.js- state=', state)  
        switch (action.type)   
        {  case CREATE_TODO: return [ ...state, {id: uuid() , text: action.text, completed: false} ]  
          default:  return state;  
        }  
      }; 
``` 
-open redux-tool and dispatch first , second todos and check console.log as shown in pics
![enter image description here](https://github.com/manojkmishra/react-redux-todos/blob/master/screenshots/dispatchfirsttodo.PNG) 
![enter image description here](https://github.com/manojkmishra/react-redux-todos/blob/master/screenshots/dispatchsecondtodo.PNG) 
![enter image description here](https://github.com/manojkmishra/react-redux-todos/blob/master/screenshots/consolelogseconddispatch.PNG) 
-modify /src/App.js to add todos via form
```
      import React, { Component } from 'react';
      import './App.css';
      import { connect } from 'react-redux';
      import { createTodo} from './actions/todos';

      class App extends Component 
      { state = {text: '',}
        _handleChange = e => 
        { console.log('/src/App.js_handleChange-e.target=', e.target);
          this.setState({  [e.target.name]: e.target.value, });
        };
        _handleSubmit = e => 
        { e.preventDefault();
        //  console.log('/src/App.js_handleSubmit-e=',e)
          //this.props.createTodo();
          this.props.createTodo(this.state.text);
        // this.setState({ text: '', });
        };
        render() 
        {
          return (
            <div className="App">
              <form className="App-intro" onSubmit={this._handleSubmit}>
                <input value={this.state.text} onChange={this._handleChange} type="text" name="text" placeholder="create todo"  />
              </form>
            </div>
          );
        }
      }
      //export default App;
      //export default connect()(App);
      //---connect takes two things----mapstatetoprops--and---mapdispatchprops---
      export default connect(undefined,{createTodo})(App);
```
![enter image description here](https://github.com/manojkmishra/react-redux-todos/blob/master/screenshots/createtodoinapp.PNG) 
-add mapstatetoprops in app.js  
```
export default connect(state => ({todos: state.todos}),{createTodo})(App);
```
![enter image description here](https://github.com/manojkmishra/react-redux-todos/blob/master/screenshots/addmapstatetoprops.PNG) 

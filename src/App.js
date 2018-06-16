import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { createTodo} from './actions/todos';

class App extends Component 
{ state = {text: '',}
  _handleChange = e => 
  { //console.log('/src/App.js_handleChange-e.target=', e.target);
    this.setState({  [e.target.name]: e.target.value, });
  };
  _handleSubmit = e => 
  { e.preventDefault();
  //  console.log('/src/App.js_handleSubmit-e=',e)
    //this.props.createTodo();
    this.props.createTodo(this.state.text);
    this.setState({ text: '', });
  };
  render() 
  {
    return (
      <div className="App">
         <form className="App-intro" onSubmit={this._handleSubmit}>
          <input value={this.state.text} onChange={this._handleChange} type="text" name="text" placeholder="create todo"  />
        </form>
        <br />
        {this.props.todos.map(todo => ( <div key={todo.id}>
                                         {todo.text}
                                        </div>
                                       )
                              )
        }
      </div>
    );
  }
}
//export default App;
//export default connect()(App);
//---connect takes two things----mapstatetoprops--and---mapdispatchprops---
//export default connect(undefined,{createTodo})(App);
export default connect(state => ({todos: state.todos}),{createTodo})(App);

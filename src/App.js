import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Eat some nice bacon',
        completed: false
      },
      {
        id: 12,
        title: 'Tell mother I love her',
        completed: false
      },
    ]
  }
  
render(){
  console.log(this.state.todos)
  return (
    <div className="App">
      
        <Todos todos={this.state.todos}/>
       
    </div>
  );
}
}

export default App;

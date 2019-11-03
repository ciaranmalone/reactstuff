import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid'


class App extends Component{
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Eat some nice bacon',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Tell mother I love her',
        completed: false
      },
    ]
  }


  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  
delTodo = (id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id)] });
}

//Add todo

AddTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
  }
    this.setState({todos: [...this.state.todos, newTodo]})
}

render(){
  console.log(this.state.todos)
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <AddTodo AddTodo={this.AddTodo}/>
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete} 
        delTodo ={this.delTodo} />
      </div>
    </div>
  ); 
}
}

export default App;

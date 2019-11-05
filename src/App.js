import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

//Styles
const bodyStyle = {
  backgroundImage: `url(${'https://background-tiles.com/overview/red/patterns/large/1056.png'})`,
}

class App extends Component{
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Wait, how tall is Peppa Pig? ',
        author: 'Joe',
        content: `The same height as Shaq, apparently. album, Peppa Pig is now capturing the internet in another way: with her height.

        A seemingly random Google search told Twitter user @Memeulous that Peppa Pig is over 7 feet tall. So, this means she towers over fellow cartoon character Caillou, who people recently discovered stands around 5 feet 11 inches. Following this revelation, @Memeulous shared a screenshot of the search result on Twitter with the caption, “this is terrifying.”`,
        liked: false
      },
      {
        id: uuid.v4(),
        title: 'The absolute size of Gru',
        author: 'Yuri',
        content: `First according to the height of a Minion (which is 3.5 feet on average) Gru is 4 minions tall, which means he is a godly size of 14 feet tall. Second if any of you remember the original Despicable Me, you Know there is a scene when Vector kidnaps the three girls and shoots a series of heat-seeking misses at Gru, he then dodge them all. According to the speed of an average ballistic missile (1900 mph) and the size of the missile according to his ankle size, Gru can perceive and move at such a speed that the missiles only move 9.5 miles per hour, 0.5% of their original speed. Plus after this Gru punches a shark and it is paralyzed meaning its spine is probably shattered, to remind you it would require a force greater than 3,000 newtons to fracture the spine. That’s equal to the impact created by a 500-pound car crashing into a wall at 30 miles per hour. I rest my case.`,
        liked: false
      },
      {
        id: uuid.v4(),
        title: 'something that actually looks nice',
        author: 'Joe',
        content: `.　　　　　　　　　　 ✦ 　　　　   　 　　　˚　　　　　　　　　　　　　　*　　　　　　   　　　　　　　　　　　　　　　.　　　　　　　　　　　　　　. 　　 　　　　　　　 ✦ 　　　　　　　　　　 　 ‍ ‍ ‍ ‍ 　　　　 　　　　　　　　　　　　,　　   　

        .　　　　　　　　　　　　　.　　　ﾟ　  　　　.　　　　　　　　　　　　　.
        
        　　　　　　,　　　　　　　.　　　　　　    　　　　 　　　　　　　　　　　　　　　　 🌞　　　　　　　　　　　　　　　　　　    　      　　　　　        　　　　*　　　　　　　　　. 　　　　　　　　　　.　　　　　　　　　　　　　. 　　　　　　　　　　　　　　　　       　   　　　　 　　　　　　　　　　　　　　　　       　   　　　　　　　　　　　　　　　　       　    ✦ 　   　　　,　　　　　　　　　*　　    🚀 　　　　 　　,　　　 ‍ ‍ ‍ ‍ 　 　　　　　　　　　　　　.　　　　　 　　 　　　.　　　　　　　　　　　　　 　           　　　　　　　　　　　　　　　　　　　˚　　　 　   　　　　,　　　　　　　　　　　       　    　　　　　　　　　　　　　　　　.　　　  　　    　　　　　 　　　　　.　　　　　　　　　　　　　.　　　　　　　　　　　　　　　* 　　   　　　　　 ✦ 　　　　　　　         　        　　　　 　　 　　　　　　　 　　　　　.　　　　　　　　　　　　　　　　　　.　　　　　    　　. 　 　　　　　.　　　　 🌕 　　　　　   　　　　　.　　　　　　　　　　　.　　　　　　　　　　   　
        
        　˚　　　　　　　　　　　　　　　　　　　　　ﾟ　　　　　.　　　　　　　　　　　　　　　. 　　 　 🌎 ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ,　 　　　　　　　　　　　　　　* .　　　　　 　　　　　　　　　　　　　　.　　　　　　　　　　 ✦ 　　　　   　 　　　˚　　　　　　　　　　　　　　* . 　　　　　　　　　　.　　　　　　　　　　　　　. 　　　　　　　　　　　　　　　　       　   　　　　 　　　　　　　　　　　　　　　　       　   　　　　　　　　　　　　　　　　       　    ✦ 　   　　　,　　　　　　　　　　　    🛸 　　　　 　　,　　　 ‍ ‍ ‍ ‍ 　 　　　　　　　　　　　　.　　　　　 　　 　　　.　　　　　　　　　　　　　 　           　　　　　　　　　　　　　　　　　　　˚　　　 　   　　　　,　　　　　　　　　　　       　    　　　　　　　　　　　　　　　　.　　　  `,
        liked: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.liked = !todo.liked
      }
      return todo;
    })})
  }
  
delTodo = (id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id)] });
}

//Add todo

AddTodo = (title, author ,content) => {
  const newTodo = {
    id: uuid.v4(),
    author,
    title,
    content,
    liked: false
  }
    this.setState({todos: [...this.state.todos, newTodo]})
}


render(){
    return (
      <Router>
      <div className="App" style={bodyStyle} >
        <div className="container">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo AddTodo={this.AddTodo}/>
              <Todos todos={this.state.todos} 
              markComplete={this.markComplete} 
              delTodo ={this.delTodo} />
            </React.Fragment> 
          )}  />

          <Route path="/about" component = {About}/>
          
        </div>
        </div>
      </Router>

    ); 
  }
}

export default App;

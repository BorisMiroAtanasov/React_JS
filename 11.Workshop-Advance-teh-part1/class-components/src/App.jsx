
import React from 'react'; 

import Header from './components/Header';
import TodoList from './components/TodoList';

import TodoContext from './context/TodoContext';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [],
      name: 'Pesho'
    }
    // this.toggleTodo = this.toggleTodo.bind(this) - на това място също може да се байдне this да сочи към current terget - да е към един и същи контекс
    // this.deleteTodo = this.deleteTodo.bind(this)
  }


  componentDidMount() {
    
    console.log('componentDidMount');
    fetch('http://localhost:3030/jsonstore/todos')
    .then(res =>res.json())
    .then(result => { 
      this.setState({
        todos:Object.values(result)
      })
     
    })
  }

  toggleTodo(todoId){
    this.setState({
      todos: this.state.todos.map(todo => todo.id === todoId ? {...todo, isCompleted: !todo.isCompleted} : todo)})
    
    }
     

    deleteTodo(todoId){
      this.setState({
        todos:this.state.todos.filter(todo => todo.id != todoId)

      })
    }
  


  render(){
    return (
      <TodoContext.Provider value={{name:this.state.name, todos:this.state.todos}}>
        <Header />

      {/* <h1>{this.state.name}</h1> */}

      <TodoList todos={this.state.todos} 
      toggleTodo={this.toggleTodo.bind(this)}
      deleteTodo= {this.deleteTodo.bind(this)}
      />

      </TodoContext.Provider>
    )

  }
}


export default App

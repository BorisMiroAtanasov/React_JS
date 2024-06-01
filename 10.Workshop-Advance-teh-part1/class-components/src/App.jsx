
import React from 'react'; 

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import TodoList from './components/TodoList';

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

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
      <>
      <Menu   mode="horizontal" items={items} />

      {/* <h1>{this.state.name}</h1> */}

      <TodoList todos={this.state.todos} 
      toggleTodo={this.toggleTodo.bind(this)}
      deleteTodo= {this.deleteTodo.bind(this)}
      />

      </>
    )

  }
}


export default App

import { Button, Card, Space } from 'antd';

import { Component } from "react";

export default class TodoListItem extends Component {
    componentDidUpdate(){
        console.log(`${this.props.label} - Did update`);
    }

    componentWillUnmount(){
        console.log(`${this.props.label} - Will Unmount`);
    }
    render(){
        return(
            
            <Card
      title={this.props.label}
      style={{
        width: 300,
        backgroundColor: this.props.isCompleted ? "red" : "green"
      }}
    >
        <Button type='primary' onClick={()=> this.props.toggleTodo(this.props.id)}>{this.props.isCompleted ? "Not Done" : "Done"}</Button>
        <Button type='primary' danger onClick={()=> this.props.deleteTodo(this.props.id)}>Remove</Button>
      {/* <p>{this.props.isCompleted ? "Completed" : "Pending"}</p> */}
    </Card>
           
        )
    }
}
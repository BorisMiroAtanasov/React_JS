import { Button, Card, Space } from 'antd';

import { Component } from "react";

export default class TodoListItem extends Component {
    render(){
        return(
            
            <Card
      title={this.props.label}
      style={{
        width: 300,
        backgroundColor: this.props.isCompleted ? "red" : "green"
      }}
    >
        <Button type='primary' onClick={()=> this.props.toggleTodo(this.props.id)}>Done</Button>
      {/* <p>{this.props.isCompleted ? "Completed" : "Pending"}</p> */}
    </Card>
           
        )
    }
}
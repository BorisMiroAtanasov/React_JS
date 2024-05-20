//import { Button } from "bootstrap";
//import ListGroup from "react-bootstrap/ListGroup";
import {ListGroup, Button} from "react-bootstrap";


export default function TodoItem({
    text,
    _id,
    isCoplited,
    onTodoAddClose,
    onTodoDeleteClick
}) {
return (
    <ListGroup.Item action style={{display:'flex', justifyContent: 'space-between'}}>  
        {text}
        <Button variant="primary"  onClick={() =>onTodoDeleteClick(_id) }>X</Button>
    
        </ListGroup.Item>
)
}
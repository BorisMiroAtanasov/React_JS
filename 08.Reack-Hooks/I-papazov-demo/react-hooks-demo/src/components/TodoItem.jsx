import ListGroup from "react-bootstrap/ListGroup";


export default function TodoItem({
    text,
    isCoplited,
}) {
return (
    <ListGroup.Item action>
        {text}
    
        </ListGroup.Item>
)
}
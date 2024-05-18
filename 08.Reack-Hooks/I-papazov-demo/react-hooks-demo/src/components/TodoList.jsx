import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoList(){

    return(
        <ListGroup style={{width:'30%', margin: '0 auto'  }} >
        <ListGroup.Item action >
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action >
          Link 2
        </ListGroup.Item>
        <ListGroup.Item action >
          This one is a button
        </ListGroup.Item>
      </ListGroup>
    )
}
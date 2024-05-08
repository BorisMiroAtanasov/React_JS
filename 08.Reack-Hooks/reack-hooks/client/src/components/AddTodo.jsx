import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function AddTodo(){
    const [formValue, setFormValue] = useState([]);
    const onSubmit =(e) => {

        e.preventDefault();
        console.log("submit");
    }

    const onChangeHandler = (e) =>{
        setFormValue(state => ({...state, [e.target.name]: e.target.value}))

    }
    return (
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Todo title</Form.Label>
          <Form.Control type="text" name='title' value={formValue.name} onChange={onChangeHandler} />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>State</Form.Label>
          <Form.Control type='text'/>
        </Form.Group> */}
        <Button variant="primary" type='submit'>Submit</Button>
      </Form>
    )
}
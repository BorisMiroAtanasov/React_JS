import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UseForm from './hooks/UseForm';

export default function AddTodo(
  {onSubmitHandler}
){
    const {formValue, changeHandlar, onSubmit} = UseForm({title:""}, onSubmitHandler)


   
    return (
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Todo title</Form.Label>
          <Form.Control type="text" name='title' value={formValue.name} onChange={changeHandlar} />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>State</Form.Label>
          <Form.Control type='text'/>
        </Form.Group> */}
        <Button variant="primary" type='submit'>Submit</Button>
      </Form>
    )
}
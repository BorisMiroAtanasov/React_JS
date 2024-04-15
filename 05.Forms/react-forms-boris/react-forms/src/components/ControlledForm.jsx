import { useState } from "react";

const formInitialState = {
  username:'',
  password:'',
  age:'',
}


export default function ControlledForm(){
  // обединен STATE
  const [formValues, setFormValues] = useState(formInitialState)

    // const [userNameValue , setUserNamevalue] = useState('');
    // const [passwordValue , setPasswordvalue] = useState('');
    // const [ageValue , setAgevalue] = useState('')

  const changeHandler = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setFormValues(state => ({
      ...state, 
      [e.target.name]:e.target.value
    }))
    
  }

    const resetFormHandler = () =>{
     setFormValues(formInitialState)
    }

    const submitHandler = () =>{
      console.log(formValues);
      
      resetFormHandler()

    }
    return (
        <>
      <h1>Controlled Form</h1>

      <form >
        <div>
          <label htmlFor="username">Username:</label>
          <input 
          type="text" 
          name='username'
          id="username" 
          value={formValues.username}
          onChange={changeHandler}
          onBlur={() => console.log('onBlur')}

          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          name='password'
          id="password" 
          value={formValues.password}
          onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input 
          type="number" 
          name='age'
          id="age"
          value={formValues.age}
          onChange={changeHandler}
           />
        </div>
        <div>
          <button type="button" onClick={submitHandler}>Register</button>
          <button type="button" onClick={resetFormHandler}>Reset</button>
        </div>
      </form>
    </>
    )
}
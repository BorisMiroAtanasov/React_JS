import { useState } from "react";

export default function ControlledForm(){
    const [userNameValue , setUserNamevalue] = useState('');
    const [passwordValue , setPasswordvalue] = useState('');
    const [ageValue , setAgevalue] = useState('')
    const userNameChangeHandler = (e) => {
        setUserNamevalue(e.target.value)

    }
    const resetFormHandler = () =>{
      setUserNamevalue('')
    }

    const passwordChangeHandler = (e) => {
      setPasswordvalue(e.target.value)
    }

    const ageChangeHandler = (e) => {
      setAgevalue(Number(e.target.value))
    }
    return (
        <>
      <h1>Controlled Form</h1>

      <form >
        <div>
          <label htmlFor="username">Username:</label>
          <input 
          type="text" 
          name="username" 
          id="username" 
          value={userNameValue}
          onChange={userNameChangeHandler}
          onBlur={() => console.log('onBlur')}

          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          name="password" 
          id="password" 
          value={passwordValue}
          onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input 
          type="number" 
          name="age" 
          id="age"
          value={ageValue}
          onChange={ageChangeHandler}
           />
        </div>
        <div>
          <button>Register</button>
          <button type="button" onClick={resetFormHandler}>Reset</button>
        </div>
      </form>
    </>
    )
}
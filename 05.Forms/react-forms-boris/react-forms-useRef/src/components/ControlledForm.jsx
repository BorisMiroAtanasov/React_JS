import { useEffect, useRef, useState } from "react";
import styles from './ControlledForm.module.css'

const formInitialState = {
  username:'',
  password:'',
  age:'',
  gender: 'f',
  swimming:false,
  shopping:false,
running:false,
}


export default function ControlledForm({
  formRef,
}){
  const usernameInputRef = useRef()
  const isMountedRef = useRef(false)
  // обединен STATE
  const [formValues, setFormValues] = useState(formInitialState)
  const [errors , setErrors] = useState({})
  useEffect(() =>{
    usernameInputRef.current.focus()
  },[]);

  // Executed only  on update
  useEffect(() =>{
    if (!isMountedRef.current){
      isMountedRef.current = true;
      return
    }
    console.log('Form is updated');
  })
    // const [userNameValue , setUserNamevalue] = useState('');
    // const [passwordValue , setPasswordvalue] = useState('');
    // const [ageValue , setAgevalue] = useState('')

  const changeHandler = (e) => {
    // let value = e.target.value
    // // console.log(e.target.name);
    // // console.log(e.target.value);
    // if(e.target.type === 'number'){
    //   value = Number(e.target.value)
    // }
    let value = ''
    switch (e.target.type) {
      case 'number':
        value = Number(e.target.value)
        break;
        case 'checkbox':
        value = e.target.checked
        break;
    
      default:
        value = e.target.value
        break;
    }
    setFormValues(state => ({
      ...state, 
      [e.target.name]:value
    }))
    
  }

    const resetFormHandler = () =>{
     setFormValues(formInitialState)
     setErrors({})
    }

    const submitHandler = (e) =>{
      e.preventDefault()
      console.log(formValues);
      
      resetFormHandler()

    }
    // const onCheckboxHandler = (e) => {
    //   setFormValues(state =>({
    //     ...state,
    //     [e.target.name]: e.target.checked
    //   }))
    // }
    const ageValidator = () =>{
     // console.log(formValues.age);
      if(formValues.age < 0 || formValues.age > 120){
        setErrors(state => ({
          ...state,
         age: 'Age should be between  0 and 120'
        }));
      }else{
        if(errors.age){
          setErrors(state => ({
            ...state,
           age: ''
          }));

        }
      }

    }
    return (
        <>
      <h1>Controlled Form</h1>

      <form ref={formRef} onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
          ref={usernameInputRef}
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
          onBlur={ageValidator}
          className={errors.age && styles.inputError}
           />
           {errors.age && (
            <p className={styles.errorMessage}>{errors.age}</p>
           )}
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
            <option value="f"  >F</option>
            <option value="m" >M</option>
            {/* <option value="f" defaultValue={formValues.gender === 'f'} >F</option>
            <option value="m" defaultValue={formValues.gender === 'm'}>M</option> */}
          </select>
        </div>
        <div>
          <h3>Hobbies</h3>
          <label htmlFor="swimming">Swimming</label>
          {/* <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={onCheckboxHandler}/> */}
          <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={changeHandler}/>
          <label htmlFor="shopping">Shopping</label>
          {/* <input type="checkbox" name="shopping" id="shopping"checked={formValues.shopping} onChange={onCheckboxHandler} /> */}
          <input type="checkbox" name="shopping" id="shopping"checked={formValues.shopping} onChange={changeHandler} />
          <label htmlFor="running">Running</label>
          {/* <input type="checkbox" name="running" id="running" checked={formValues.running} onChange={onCheckboxHandler}/> */}
          <input type="checkbox" name="running" id="running" checked={formValues.running} onChange={changeHandler}/>
        </div>
        <div>
          <button type="submit" disabled={Object.values(errors).some(x =>x)}>Register</button>
          <button type="button" onClick={resetFormHandler}>Reset</button>
        </div>
      </form>
    </>
    )
}
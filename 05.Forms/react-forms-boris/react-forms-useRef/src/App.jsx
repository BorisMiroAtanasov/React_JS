
import { useRef } from 'react'
import './App.css'
import ControlledForm from './components/ControlledForm'
import UncontroledForm from './components/UncontroledFOrm'

function App() {
  const formRef = useRef()

  return (
    <>
    <ControlledForm  formRef={formRef}/>

    <button 
    type="button" 
    onClick={() => formRef.current.submit()}  // 2 var. onClick={() => formRef.requestSubmit()}
   
    >Submit
    </button>

      
    </>
  )
}

export default App

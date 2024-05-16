

import { useState, useEffect } from "react"
import CardContainer from "./components/CardContainer"
import Header from "./components/Header"
import { TodoContext } from "./contex/ToDoContext"

function App() {
const baseUrl = "http://localhost:3030/jsonstore/todos"

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(baseUrl)
      .then(response => {
        return response.json()
      })
      .then(result => {
        setTodos(Object.values(result))})

  },[])

  const onSubmitHandler = async(value) => {
    const response = await fetch(baseUrl, {
      method : "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify({...value,isFinish:"false"})
    }

    )
    const data = await response.json();
    setTodos(state => [...state, data])

  }
  const context = {
    onSubmitHandler,
    todos,
  }
  
  return (
    <>

    <TodoContext.Provider value={context}>
    
   <Header />
   <CardContainer />
   </TodoContext.Provider>
    </>
  )
}

export default App

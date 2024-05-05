

import { useState, useEffect } from "react"
import CardContainer from "./components/CardContainer"
import Header from "./components/Header"

function App() {
const baseUrl = "http://localhost:3030/jsonstore/"

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(baseUrl + "todos")
      .then(response => {
        return response.json()
      })
      .then(result => {
        setTodos(Object.values(result))})

  },[])
  
  return (
    <>
   <Header />
   <CardContainer todos={todos} />
      
    </>
  )
}

export default App

import { useState, useEffect } from "react";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import AddTodoModal from "./components/AddTodoModal";

const baseUrl = "http://localhost:3030/jsonstore/todos";
function App() {
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setshowAddTodo] = useState(false)

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((result) => {
        setTodos(Object.values(result));
      });
  }, []);

  const onTodoAddSubmit = async (values) => {
    //console.log(values);
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const result = await response.json();
    setshowAddTodo(false)
    setTodos(state => [...state, result])


    console.log(result);
  };

  const onTodoAddClick = () =>{
    setshowAddTodo(true)

  }
  const onTodoAddClose =() => {
    setshowAddTodo(false)
  }

  return (
    <>
      <Header />

      <TodoList todos={todos} onTodoAddClick={onTodoAddClick} />

      <AddTodoModal show={showAddTodo} onTodoAddSubmit={onTodoAddSubmit} onTodoAddClose={onTodoAddClose} />
    </>
  );
}

export default App;

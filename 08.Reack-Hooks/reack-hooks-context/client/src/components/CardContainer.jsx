import { useContext } from "react";
import AddTodo from "./AddTodo";
import ToDoCard from "./ToDoCard";
import { TodoContext } from "../contex/ToDoContext";

export default function CardContainer() {

  const {todos} = useContext(TodoContext)
  return (

    <div
      style={{ margin: "20px", display: "inline-flex", flexDirection: "column" }}
    >
      <div style={{display:"flex", flexDirection:"row"}}>
        {todos.map((item) => (
          <ToDoCard key={item._id} {...item} />
        ))}
      </div>
      <div style={{display:"block"}}> 
        <AddTodo  />
      </div>
    </div>
  );
}

import AddTodo from "./AddTodo";
import ToDoCard from "./ToDoCard";

export default function CardContainer({ todos ,onSubmitHandler}) {
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
        <AddTodo onSubmitHandler={onSubmitHandler} />
      </div>
    </div>
  );
}

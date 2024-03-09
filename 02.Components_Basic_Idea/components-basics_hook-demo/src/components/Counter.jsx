import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const onIncrementClick = () => {
    setCount((oldValue) => oldValue + 1); // за гоелми проекти - по-правилен начин
    // setCount(count + 1) // за малки проекти
  };
  // <button onClick={() => setCount(0)}>clear</button>
  const clearCounterHendelr = (event) => {
    console.log(event);
    setCount(0);
  };
  //First var.
  // if(count < 0){
  //     return(
  //         <h3>Invalid count!</h3>
  //     )
  // }

  // let warning = null;  // може undefid, не може {} - празен обект

  // if(count < 0){
  //     warning = <p>Invalid count!</p>
  // }
  let message = null;

  switch (count) {
    case 1:
      message = "First";
      break;
    case 2:
      message = "Second";
      break;
    case 3:
      message = "Third";
      break;
    case 4:
      message = "Fourt";
      break;
    case 5:
      message = "Fived";
      break;
      default: message = 'MMMMMM'
  }

  return (
    <div>
      <h3>Count</h3>
      {count < 0 ? <p>Invalid count!</p> : <p>Valid count</p>}
      {count == 0 && <p>Please start increment!</p>}
      <h4>{message}</h4>
      <p>Count:{count}</p>
      <button disabled={count <0} onClick={() => setCount(count - 1)}>-</button>
      <button onClick={clearCounterHendelr}>clear</button>
      <button onClick={onIncrementClick}>+</button>
    </div>
  );
}

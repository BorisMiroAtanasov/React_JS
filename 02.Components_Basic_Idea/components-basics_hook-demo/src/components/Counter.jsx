import { useState } from "react"

export default function Counter(props){
const [count, setCount] = useState(0);

const onIncrementClick = () => {
    setCount(oldValue =>oldValue + 1) // за гоелми проекти - по-правилен начин 
   // setCount(count + 1) // за малки проекти

}
// <button onClick={() => setCount(0)}>clear</button> 
const clearCounterHendelr = (event) => {
    console.log(event);
    setCount(0)

}
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

    return(
        <div>
            <h3>Count</h3>
            {count < 0 
            ? <p>Invalid count!</p>
            : <p>Valid count</p>
        }

            <p>Count:{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={clearCounterHendelr}>clear</button>
            <button onClick={onIncrementClick}>+</button>
           
        </div>

    )
}
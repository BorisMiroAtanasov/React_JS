import { useState } from "react"

export default function Counter(props){
const [count, setCount] = useState(0);

const onIncrementClick = () => {
    setCount(count + 1)

}
// <button onClick={() => setCount(0)}>clear</button> 
const clearCounterHendelr = () => {
    setCount(0)

}

    return(
        <div>
            <h1>Count</h1>

            <p>Count:{count}</p>
            <button onClick={onIncrementClick}>+</button>
            <button onClick={clearCounterHendelr}>clear</button>
           
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>

    )
}
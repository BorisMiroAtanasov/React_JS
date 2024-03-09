import { useState } from "react"

export default function Counter(props){
const [count, setCount] = useState(0);

const onIncrementClick = () => {
    setCount(count + 1)
}

    return(
        <div>
            <h1>Count</h1>

            <p>Count:{count}</p>
            <button onClick={onIncrementClick}>
                +
            </button>
        </div>

    )
}
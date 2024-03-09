import { useState } from "react";


export default function Timer(props){
   // const hookResult = useState(); // hookresult is an array
    // const valueStata = hookResult[0] // стойността на стейтеа  is the first element in the array
    // const setState = hookResult[1] // връща функция за промяна на стейта е в hookResult
    //const [state, setState] = useState()
    
    //NOTE don t use setTimeout , useEffect is more appropriated
    const [time, setTime] = useState(props.startTime) // тряба да сложим начален стейт  - pass initioal state

    //let time = 0;
    //console.log(`Current time = ${time}`);

    setTimeout(() => {
        setTime(time + 1);
        console.log(`Current time = ${time}`);

    }, 1000)

    return (
        <div>
            <h3>Timer</h3>
            <p>{time}</p>
        </div>
    )
}
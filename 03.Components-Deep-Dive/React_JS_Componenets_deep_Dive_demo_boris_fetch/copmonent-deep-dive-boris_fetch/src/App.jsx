import { useState, useEffect } from "react";
import StarWars from "./StarWars";
import styles from './App.module.css'

function App() {
    const [numbers, setNumbers] = useState([1,2,3,4,5]);
    const [count, setCount] = useState(0);
    const [isManualUpdate, setIsManualUpdate] = useState(false)

    useEffect(() =>{
        console.log('Mountin components');
        
    },[])
    useEffect(() =>{
        console.log(`Update component - ${numbers.length}`);
        
    },[numbers]);
    
    useEffect(() =>{
        if(!isManualUpdate){
            //setTimeout(() => setCount(s => s + 1), 1000 )

        }else{
            setIsManualUpdate(false)
        }
        
    },[count])
  

  const onClick = () => {
    setNumbers(oldState => oldState.slice(0 , oldState.length - 1));
    
  };

  const setCountFunc = () => {
    setCount(c => c + 1)
    setIsManualUpdate(true)
  }
  return (
    <div className={styles.app}>
      <StarWars />
        <h3>Count: {count}</h3>
      <ul>
        {numbers.map ((number, index) =>(
         <li 
         data-key={index} key={index}
          className={styles.listItem}
         > 
         {number * 2} 
         </li>)
         )}
      </ul>
        <button onClick={onClick}>Remove</button>
        <button onClick={setCountFunc}>+</button>
    </div>
  );
}

export default App;

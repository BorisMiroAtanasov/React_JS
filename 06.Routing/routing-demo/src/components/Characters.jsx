import { useEffect, useState } from "react"
import CaracterListItem from "./CharacterListItem"
import styles from "./CharacterList.module.css"
const baseUrl = 'https://swapi.py4e.com/api'


const Characters =() => {
    const [characters, setCharacters] = useState([])
    useEffect(() =>{
        fetch(`${baseUrl}/people`)
        .then(res => res.json())
        .then(data =>
            setCharacters(data.results))
    },[])
    return(
        <div className={styles.characterList}>
            {characters.map((character,index ) =>
         
                <CaracterListItem key={character.name} id={index+1} {...character}/>
                )}
        </div>

    )
}

export default Characters
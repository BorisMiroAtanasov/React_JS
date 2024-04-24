import { useEffect , useState} from "react"
import {useParams} from "react-router-dom"

const CharacterDetails =() =>{

    const {id} = useParams()
    const [character, setCharacters] = useState({})
    const name = "Unknown"
    useEffect(() =>{
        fetch(`https://swapi.py4e.com/api/people/${id}`)
        .then(res =>res.json())
        .then(setCharacters)


    },[id])
    return (
        <>
        <h1>{character.name}</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis asperiores sequi, ratione temporibus repudiandae facere, cupiditate ab officia dolore, voluptatibus quasi eos veniam assumenda commodi accusantium quibusdam animi! Ad, officiis.
        </p>
        <p>
            {character.height}
        </p>
        </>

    )

}
export default CharacterDetails
import { useEffect , useState} from "react"
import {useParams, useLocation, useNavigate} from "react-router-dom"

const CharacterDetails =() =>{

    const {id} = useParams()
    const location = useLocation();
    const navigate = useNavigate()
    const [character, setCharacters] = useState({})

    console.log(location.pathname);
    const name = "Unknown"
    useEffect(() =>{
        fetch(`https://swapi.py4e.com/api/people/${id}`)
        .then(res =>{
            if(!res.ok){
                throw new Error('Not Found')
            }
            return res.json()
            
        })
        .then(setCharacters)
        .catch(err =>{
            navigate('/404')
        })


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
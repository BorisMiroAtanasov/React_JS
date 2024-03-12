import { useEffect, useState } from "react";

export default function StarWars(props) {
  const [characters, setCaracters] = useState([]);
  console.log(characters);
  useEffect(() => {
    fetch("https://swapi.py4e.com/api/starships/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCaracters(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return(
    <div>
  <h1>Star Wars characters</h1>
<ul>
    {characters.map(characters => <li key={characters.url}>{characters.name}</li>)}
</ul>
  </div>
  );
}

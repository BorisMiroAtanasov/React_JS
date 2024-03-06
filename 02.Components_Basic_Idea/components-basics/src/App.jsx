import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

const Movies = [
    {
        title: 'The Matrix',
        description:'Description Here',

},
    {
        title: 'Man of Steel',
        description:'Description Here',

},
    {
        title: 'Harry Potter',
        description:'Description Here',

}
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My first dynamic React Application</h1>
      <MovieList headingText="Filmi" secondaryText='Secondary Text'/>
    </div>
  );
}

export default App;

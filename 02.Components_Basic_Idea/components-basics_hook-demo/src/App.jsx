import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import MovieList from "./components/MovieList";
import movies from "./assets/movies";
import Counter from "./components/Counter";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My first dynamic React Application</h1>
      <Counter />
      <Timer startTime={5}/>

      <MovieList movies={movies} headingText="Movie List" />
    </div>
  );
}

export default App;

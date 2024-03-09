import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import MovieList from "./components/MovieList";
import movies from "./assets/movies";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My first dynamic React Application</h1>
      <Timer />
      <MovieList movies={movies} headingText="Movie List" />
    </div>
  );
}

export default App;

export default function Movie(props){
   // console.log(props);
    return(
        <article>

        <h3>{props.movieData.title}</h3>
        <p>Year: {props.movieData.year}</p>
        <p>Cast: {props.movieData.actors}</p>

        </article>
    )
}
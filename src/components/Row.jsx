import React , {useState, useEffect} from 'react'
import axios from "../axios"
import "./Row.css"
import Movie from './Movie';

function Row(props) {
    const [movies, setMovies] = useState([]);
    const [trailer, setTrailer] = useState();

    useEffect(() => {

        async function fetchData() {
            if(props.name == "Harry Potter Movies") {
                (props.url).map(async function(element) {
                    const response = await axios.get(element);
                    setMovies(prev => [...prev, response.data.results[0]]);

                    return response;

                });
            } else if(props.name == "Famous Movies") {
                (props.url).map(async function(element) {
                    const response = await axios.get(element);
                    setMovies(prev => [...prev, response.data.results[0]]);

                    return response;

                });
            } else {
                const response = await axios.get(props.url);

                setMovies(response.data.results);

                return response;
            }
        }

        fetchData();

    }, []);


  return (
    <div className="row">
        <h2>{props.name}</h2>
        <div className="movie-row">
            {movies.map(function(movie) {
                return <Movie id={movie.id} source={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} name={movie?.name || movie?.title || movie?.original_name} hover={props.hover}/>
            })}
        </div>
    </div>
  )
}

export default Row
import React , {useState, useEffect} from 'react'
import axios from "../axios"
import "./Row.css"
import Movie from './Movie';
import requests from "../Requests";

function MovieRow(props) {
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {

        async function fetchDate() {
            console.log("I ENTERED HERE!!!!!!!!!!");
            console.log(props.rowMovieNames);
            (props.rowMovieNames).map(async function(element) {
                const reqURL = `/search/movie?query=${element}&api_key=${requests.fetchNormal}`

                const request = await axios.get(reqURL).then(async function(res) {
                    console.log(res.data.results[0]);
                    setAllMovies(prev => [...prev, res.data.results[0]]);
                });

                return request;
            })
        }
        fetchDate();

    }, [props.rowMovieNames]);

    console.log("HERE ......");
console.log(props.rowMovieNames);
console.log(allMovies);

  return (
    <div className="row">
        <h2>{props.name}</h2>
        <div className="movie-row">
            {allMovies.map(function(movie) {
                return movie.backdrop_path && <Movie id={movie.id} source={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} name={movie?.name || movie?.title || movie?.original_name} hover={props.hover}/>
            })}
        </div>
    </div>
  )
}

export default MovieRow
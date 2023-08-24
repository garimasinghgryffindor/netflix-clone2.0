import React , {useState, useEffect} from 'react';
import "./MovieBanner.css";
import requests from "../Requests";
import axios from "../axios"
import "./Banner.css";

function Banner(props) {
    
    const movie = props.movie;

    useEffect(() => {
            async function fetchDate() {
                const reqURL = `/search/movie?query=${props.movieName}&api_key=${requests.fetchNormal}`
                const request = await axios.get(reqURL).then(async function(res) {
                    console.log(res.data.results[0]);
                    props.setMovie(res.data.results[0]);
                });
                
                return request;
            }
            fetchDate();
        }
    , []);

    function truncate(string,n) {
        if(!string)
            return "";
        return string.length > n ? string.substr(0,n-1) + "..." : string;
    }

  return (
    <header className="banner" style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
        }}>
        <div className="banner-contents">
            <h1 className='movie-name'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='description'>{truncate(movie?.overview, 150)}</div>
            <div className="banner-buttons">
                <button className="play"><img className="button-icons" src="images/play.png" /><p className="icon-text"> Play</p></button>
                <button className='more-info'><img className="button-icons" src="images/more-information.png" /><p className="icon-text"> More Info</p></button>
            </div>
        </div>
        <div className='fade-bottom' />
        <div className='fade-bottom2' />
    </header>
  )
}

export default Banner
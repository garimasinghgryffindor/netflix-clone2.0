import React , {useState, useEffect} from 'react';
import "./Banner.css";
import requests from "../Requests";
import axios from "../axios"
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

function Banner() {
    const [movie, setMovie] = useState({});
    const [trailer, setTrailer] = useState();

    useEffect(() => {
            async function fetchDate() {
                const request = await axios.get(requests.fetchNetflixOriginals).then(async function(res) {
                    let idx = Math.floor(Math.random()*res.data.results.length);

                    setMovie(res.data.results[idx]);

                    await movieTrailer(res.data.results[idx]?.title || res.data.results[idx]?.name || res.data.results[idx]?.original_name)
                    .then((url) => {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailer(urlParams.get("v"));
                    })
                    .catch(err => {
                        console.log(err);
                    });
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

    console.log(movie);
    console.log(movie.id);

    const opts = {
        height: "880",
        width: "100%",
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            mute: 1,
            loop: 1
        }
    };

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
                <button className="play"><img className="button-icons" src="images/play.png"/><p className="icon-text"> Play</p></button>
                <button className='more-info'><img className="button-icons" src="images/more-information.png"/><p className="icon-text"> More Info</p></button>
            </div>
        </div>
        <div className='fade-bottom' />
        <div className='fade-bottom2' />
        <div className='trailer'>
            <YouTube videoId={trailer} opts={opts} />
        </div>
    </header>
  )
}

export default Banner
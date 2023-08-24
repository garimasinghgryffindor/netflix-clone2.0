import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./movieClicked.css";
import Header from "./Header";
import MovieBanner from "./MovieBanner";
import axios from "../axios";
import MovieRow from "./MovieRow";
import MovieTop from "./MovieTop";
import Data from "./json/recommendations.json";

function MovieClicked(props) {
  const { movieName } = useParams();

  const [currentMovie, setCurrentMovie] = useState({});
  const [movie, setMovie] = useState({});


  function setHoveredMovie(url, name, posx, posy, id) {
    setCurrentMovie({ url: url, name: name, posx: posx, posy: posy, id: id });
  }

  useEffect(() => {

  }, []);

  const movieID = String(movie.id);
  const allRecommendedMoviesNames = Data[movieID];
  let rowMovieNames = [];

  for(let id in allRecommendedMoviesNames) {
    rowMovieNames.push(allRecommendedMoviesNames[id]);
  }

//  console.log(rowMovieNames);


  return (
    <div className="movieClicked">
      <Header id={movieName} />
      <MovieBanner movieName={movieName} setMovie={setMovie} movie={movie}/>
      <MovieRow
        rowMovieNames={rowMovieNames}
        name="Recommendations"
        hover={setHoveredMovie}
      />
      <MovieTop
        url={currentMovie.url}
        name={currentMovie.name}
        posX={currentMovie.posx}
        posY={currentMovie.posy}
        id={currentMovie.id}
        hover={setCurrentMovie}
    />
    :null
    </div>
  );
}

export default MovieClicked;

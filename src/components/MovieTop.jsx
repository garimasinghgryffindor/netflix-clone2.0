import React from "react";
import { Link } from "react-router-dom";
import "./MovieTop.css";

function MovieTop(props) {
  if (props.url != null) {
    const ele = document.querySelector(".movie-top");
    ele.style.display = "inline-block";
    ele.style.left = Number(props.posX) - 50 + "px";
    ele.style.top = Number(props.posY) - 100 + "px";
  }

  function changeVisibility() {
    document.querySelector(".movie-top").style.display = "none";
  }

  const link = `/movie/${props.name}`

  return (
    <Link to={link}>
      <div className="movie-top" onMouseLeave={changeVisibility}>
        <img src={props.url} alt="movie poster" />
        <br />
        <br />
        <br />
        <h3>{props.name}</h3>
      </div>
    </Link>
  );
}

export default MovieTop;

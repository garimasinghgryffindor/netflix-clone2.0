import React, {useRef, useEffect, useState} from 'react'
import "./Movie.css";

function Movie(props) {
   
    useEffect(() => {
 
    });

    function zoom(e) {
        console.log(e.target);
        props.hover(props.source, props.name,e.target.offsetLeft,e.target.offsetTop, props.id);
    }
    

  return (
    <div>
        <img onMouseEnter={zoom} id={`_${props.id}`} className="movie-poster" src={props.source} alt="movie poster"/>
    </div>
  )
}

export default Movie
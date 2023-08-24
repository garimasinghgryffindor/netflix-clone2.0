import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import requests from "../Requests";
import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Row from "./Row";
import MovieTop from "./MovieTop";
import MovieClicked from "./MovieClicked"

function App() {
  const [currentMovie, setCurrentMovie] = useState({});

  function setHoveredMovie(url, name, posx, posy, id) {
    setCurrentMovie({ url: url, name: name, posx: posx, posy: posy, id: id });
  }

  return (
    <Router>
      <div className="App">
        <Routes>

          <Route
            path="/"
            element={
              <div>
                <Header />
                <Banner />
                <div className="rows">
                  <Row
                    url={requests.fetchNetflixOriginals}
                    name="Netflix Originals"
                    hover={setHoveredMovie}
                  />
                  <Row
                    url={requests.fetchHarryPotterMovies}
                    name="Harry Potter Movies"
                    hover={setHoveredMovie}
                  />
                  <Row
                    url={requests.fetchFamous}
                    name="Famous Movies"
                    hover={setHoveredMovie}
                  />
                  <Row
                    url={requests.fetchTrending}
                    name="Trending"
                    hover={setHoveredMovie}
                  />
                  <Row
                    url={requests.fetchTopRated}
                    name="Rop Rated"
                    hover={setHoveredMovie}
                  />
                  <Row
                    url={requests.fetchActionMovies}
                    name="Action Movies"
                    hover={setHoveredMovie}
                  />
                  <Row
                    url={requests.fetchHorrorMovies}
                    name="Horror Movies"
                    hover={setHoveredMovie}
                  />
                  <Row
                    url={requests.fetchComedyMovies}
                    name="Comedy Movies"
                    hover={setHoveredMovie}
                  />
                  <Row
                    url={requests.fetchRomanceMovies}
                    name="Romance Movies"
                    hover={setHoveredMovie}
                  />
                  <Row
                    url={requests.fetchDocumentaries}
                    name="Documentaries"
                    hover={setHoveredMovie}
                  />
                </div>
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
            }
          ></Route>


          <Route
            path="/movie/:movieName"
            element={<div>
                <MovieClicked />
            </div>}
          ></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

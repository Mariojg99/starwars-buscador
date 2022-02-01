import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Home from '../components/Home';
import { endPoint } from '../helpers/url';


  export const AppRouter = () => {

    const [character, setCharacter] = useState([]);

    const getCharacters = async () => {
    const res = await fetch(endPoint)
    const data = await res.json()
    setCharacter(data.results);
}

useEffect(() => {
    getCharacters()
}, []);

      return (
          <Router>
              <Routes>
                  <Route exact path="/" element={<Home data={character}/>} />
              </Routes>
          </Router>
      )
  }
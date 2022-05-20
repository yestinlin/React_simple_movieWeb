import React from 'react';

import { useState, useEffect } from 'react';
//379e8de8

import './App.css'
import searchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=379e8de8';

const movie1 ={
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchWord, setSearchWord] = useState([]);

    
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    } 
 
    useEffect(() =>{
        searchMovie('Batman');
    }, []);

    return(
       <div className='app'>
           <h1>MovieLand</h1>

           <div className='search'>
            <input
                placeholder='Search for movies'
                value= {searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
            />
            <img 
                src= {searchIcon}
                alt="search"
                onClick={() => searchMovie(searchWord)}
            />
           </div>
            {
                movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map ((movie) =>(
                            <MovieCard movie ={movie}/>
                        ) )}
                    </div>
                ):
                (
                    <div className='empty'>
                
                        <h3>No movies found</h3>

                    </div>
                )
            }
        </div>
    );
}

export default App;
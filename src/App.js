import {useEffect, useState} from 'react'
// 120c97b0
import './index.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const movie1 = {
  "Poster" : "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
  "Title" : "Italian Spiderman",
  "Type" :"movie",
  "Year" : "2007",
  "imdbID": "tt2705436"
}
const API_URL  = 'http://www.omdbapi.com?apikey=120c97b0';
const App = () => {
  const [movies,setMovies] = useState([]);

  const [searchTerm , setSearchTerm] = useState('');

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);


  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search A Movie"
          value = {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src = {SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies ?.length > 0
          ? (
              <div className='container'>
                {movies.map((movie) => (
                  <MovieCard movie = {movie}/>
                )) }
              </div>

          ) : 
          (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          ) 
      }
      
    </div>
  );
}

export default App
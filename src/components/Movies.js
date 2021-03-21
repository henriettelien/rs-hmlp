import { useState } from 'react';
import { getMovies } from "../utils/movieService.js";
import Movie from './Movie.js';

const Movies = () => {
    const [data, setData] = useState([]);
    
    const handleClick = async () => {
        const movies = await getMovies();
        setData(movies)
    };
    
    return (
        <>
            <h1>Film</h1>

            <button type="button" onClick={handleClick}>Click here</button>
            {data.map(movie => <Movie title={movie.title} actor={movie.actor} />)}
        </>
    );
};

export default Movies;
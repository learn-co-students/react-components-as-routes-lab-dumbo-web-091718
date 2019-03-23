import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1> Movie Page </h1>
        {movies.map((movie, index) => (
          <div key={index}>  <h3> Name: {movie.title} </h3>
            <p> Movies:  </p>
             <ul>
                {movie.genres.map((genre, index) => (
                  <li key={index}> {genre} </li>
                ))}
             </ul>


          </div>
        ))}
    </div>
  );
};

export default Movies;

import React from 'react';
import { movies } from '../data';

const Movies = () => {

  let i = 0

  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        <strong>Name: {movies[0].title}</strong>
        <br /><br />
        Time: {movies[0].time}
        <br /><br />
        Genres:
        <ul>
          {movies[0].genres.map( genre => <li>{genre}</li> )}
        </ul>
      </div>

      <div>
        <strong>Name: {movies[1].title}</strong>
        <br /><br />
        Time: {movies[1].time}
        <br /><br />
        Genres:
        <ul>
          {movies[1].genres.map( genre => <li>{genre}</li> )}
        </ul>
      </div>

      <div>
        <strong>Name: {movies[2].title}</strong>
        <br /><br />
        Time: {movies[2].time}
        <br /><br />
        Genres:
        <ul>
          {movies[2].genres.map( genre => <li>{genre}</li> )}
        </ul>
      </div>
    </div>
  );
};

export default Movies;

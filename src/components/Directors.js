import React from 'react';
import { directors } from '../data';

const Directors = () => {

  // let dir = directors.map( person => {
  //   debugger
  //   return person
  // })
  return (
    <div>
      {/*{code here}*/}
      {directors.map((director, index) => (
        <div key={index}> <h3> Name: {director.name} </h3>
          <p> Movies: </p>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}> {movie} </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors

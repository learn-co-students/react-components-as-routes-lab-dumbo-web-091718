import React from 'react';
import { actors } from '../data';

const Actors = () => {

  // let actorList = actors.map( actor => {
  //   // debugger
  //   return (actor.name)

      // let mov = actors.movies.map( movie => {
      //     return movie
      // })

  // })
  return (
    <div>
        <h1> Actors Page </h1>

       {actors.map((actor, index) => (
        <div key={index}> <h3> Name: {actor.name} </h3>
            <p> Movies: </p>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}> {movie} </li>
                ))}
              </ul>
        </div>
      ))}
    </div>
  );
};
// <ul> {actorList} </ul>
export default Actors;

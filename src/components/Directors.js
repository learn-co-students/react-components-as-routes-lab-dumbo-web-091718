import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        <strong>Name: {directors[0].name}</strong>
        <br /><br />
        Movies:
        <ul>
          {directors[0].movies.map( movie => <li>{movie}</li> )}
        </ul>
      </div>

      <div>
        <strong>Name: {directors[1].name}</strong>
        <br /><br />
        Movies:
        <ul>
          {directors[1].movies.map( movie => <li>{movie}</li> )}
        </ul>
      </div>

      <div>
        <strong>Name: {directors[2].name}</strong>
        <br /><br />
        Movies:
        <ul>
          {directors[2].movies.map( movie => <li>{movie}</li> )}
        </ul>
        </div>
    </div>
  );
}

export default Directors

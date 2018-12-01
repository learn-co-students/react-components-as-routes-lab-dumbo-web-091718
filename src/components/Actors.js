import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      <div className='actor'>
        <strong>Name: {actors[0].name}</strong>
        <br /><br />
        Movies:
        <ul>
          {actors[0].movies.map( movie => <li>{movie}</li> )}
        </ul>
      </div>

      <div className='actor'>
        <strong>Name: {actors[1].name}</strong>
        <br /><br />
        Movies:
        <ul>
          {actors[1].movies.map( movie => <li>{movie}</li> )}
        </ul>
      </div>

      <div className='actor'>
        <strong>Name: {actors[2].name}</strong>
        <br /><br />
        Movies:
        <ul>
          {actors[2].movies.map( movie => <li>{movie}</li> )}
        </ul>
      </div>

      <div className='actor'>
        <strong>Name: {actors[3].name}</strong>
        <br /><br />
        Movies:
        <ul>
          {actors[3].movies.map( movie => <li>{movie}</li> )}
        </ul>
      </div>
    </div>
  );
};

export default Actors;

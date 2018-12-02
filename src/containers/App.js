import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path='/' components={Home} />
        <Route exact path='/movies' components={Movies} />
        <Route exact path='/directors' components={Directors} />
        <Route exact path='/actors' components={Actors} />
      </React.Fragment>
    </Router>
  );
};

export default App

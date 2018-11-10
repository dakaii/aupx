import React, { Component, Fragment } from 'react';
import SearchBar from './SearchBar'
import MovieInfo from './MovieInfo'

class App extends Component {
  render() {
    return (
      <Fragment>
        <SearchBar/>
        <MovieInfo/>
      </Fragment>
    );
  }
}

export default App;

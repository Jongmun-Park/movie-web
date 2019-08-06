import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Guardians of The Galaxy",
            poster: "http://www.slashfilm.com/wp/wp-content/images/guardians-of-the-galaxy-vol-2-tv-spot.jpg",
          },
          {
            title: "Matrix",
            poster: "https://boygeniusreport.files.wordpress.com/2017/10/the-matrix.jpg?quality=98&strip=all",
          },
          {
            title: "Oldboy",
            poster: "https://www.slantmagazine.com/wp-content/uploads/2004/06/oldboy.jpg",
          },
          {
            title: "Into The Wild",
            poster: "https://experiencefilmsite.files.wordpress.com/2019/05/cover-experiences.jpg?w=736&h=380&crop=1",
          },
        ]
      })
    }, 5000);
  }

_renderMovies = () => {
  const movies = this.state.movies.map((movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index}></Movie>
  })
  return movies
}

  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;

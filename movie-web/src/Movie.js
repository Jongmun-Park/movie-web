import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}){
  return (
      <div className="Movie">
        <div className="Movie__Columns">
          <MoviePoster poster={poster} alt={title}/>
        </div>
        <div className="Movie_Columns">
          <h2>{title}</h2>
          <div className="Movie_Genres">
            {genres.map((genre, index) => <MovieGenre genre={genre} key={index}></MovieGenre>)}
          </div>
          <p className="Movie__Synopsis">
            {synopsis}
          </p>
        </div>
      </div>
  )
}

function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
  )
}

function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}

Movie.protoTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
}

MoviePoster.protoTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

MovieGenre.protoTypes = {
  genre: PropTypes.string.isRequired,
}

export default Movie

import './MoviesCard.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({
  movie,
  addMovieToSaved,
  deleteMovieFromSaved,
  userMovies,
}) {
  const location = useLocation();
  const savedMoviesPath = location.pathname === '/saved-movies';
  const imageMoviesUrl = `https://api.nomoreparties.co${movie.image.url}`;
  const durationMovie = `${Math.floor(movie.duration / 60)}ч ${
    movie.duration % 60
  }мин`;
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const isMovieSaved = userMovies.some(({ movieId }) => movieId === movie.id);
    setIsLiked(isMovieSaved);
  }, [userMovies, movie]);

  function changeLikeStatus() {
    if (isLiked) {
      const savedMovie = userMovies.find((saved) => {
        return saved.movieId === movie.id;
      });
      deleteMovieFromSaved(savedMovie);
      setIsLiked(!isLiked);
    } else {
      addSavedMovie(movie);
      setIsLiked(!isLiked);
    }
  }

  function addSavedMovie(movie) {
    const newMovieToSaved = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: imageMoviesUrl,
      trailerLink: movie.trailerLink,
      thumbnail: imageMoviesUrl,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    addMovieToSaved(newMovieToSaved);
  }

  function onDelete() {
    deleteMovieFromSaved(movie);
    setIsLiked(!isLiked);
  }

  const imagePathname = savedMoviesPath ? movie.image : imageMoviesUrl;
  const buttonPathname = `card__button ${
    isLiked ? 'card__button_type_added' : ''
  }`;
  const textPathname = savedMoviesPath ? '' : isLiked ? '' : 'Сохранить';

  return (
    <li className="card">
      <div className="card__container">
        <h2 className="card__title">{movie.nameRU}</h2>
        <p className="card__duration">{durationMovie}</p>
      </div>
      <a href={movie.trailerLink} className="card__link" target="blank">
        <img
          className="card__image"
          src={imagePathname}
          alt={movie.nameRU}
        ></img>
      </a>
      {savedMoviesPath ? (
        <button
          type="button"
          className="card__button card__button_type_delete"
          onClick={onDelete}
        >
          {textPathname}
        </button>
      ) : (
        <button
          type="button"
          className={buttonPathname}
          onClick={changeLikeStatus}
        >
          {textPathname}
        </button>
      )}
    </li>
  );
}

export default MoviesCard;

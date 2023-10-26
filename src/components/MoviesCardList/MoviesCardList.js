import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesButton from '../MoviesButton/MoviesButton';
import { useLocation } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';

function MoviesCardList({
  movies,
  handleAddMovieToSaved,
  handleDeleteMovieFromSaved,
  savedMovies,
  userMovies,
  isSearchSumbit,
  setIsSearchSumbit,
}) {
  const location = useLocation();
  const moviesPath = location.pathname === '/movies';
  const savedMoviesPath = location.pathname === '/saved-movies';

  const ref = useRef();
  const [width, setWidth] = useState();
  const [visibleMovies, setVisibleMovies] = useState(12);
  const [isClick, setIsClick] = useState(null);

  useEffect(() => {
    setVisibleMovies(width <= 1238 ? (width <= 718 ? 5 : 8) : 12);
  }, [width, ref]);

  const widthTraking = useCallback(
    (clientWidth) => {
      if (clientWidth > 1238) {
        setVisibleMovies(9);
        setVisibleMovies(isClick ? visibleMovies + 3 : visibleMovies + 0);
        setIsClick(false);
      }

      if (clientWidth <= 1238) {
        setVisibleMovies(6);
        setVisibleMovies(isClick ? visibleMovies + 2 : visibleMovies + 0);
        setIsClick(false);
      }
      if (clientWidth <= 718) {
        setVisibleMovies(3);
        setVisibleMovies(isClick ? visibleMovies + 2 : visibleMovies + 0);
        setIsClick(false);
      }
    },
    [isClick, setVisibleMovies, visibleMovies]
  );

  const issuingAfterSubmit = useCallback(
    (clientWidth) => {
      if (isSearchSumbit === true) {
        if (clientWidth > 1238) {
          setVisibleMovies(12);
        }

        if (clientWidth <= 1238) {
          setVisibleMovies(8);
        }
        if (clientWidth <= 718) {
          setVisibleMovies(5);
        }
        setIsSearchSumbit(false);
      }
    }, //eslint-disable-next-line
    [isSearchSumbit]
  );

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([{ target }]) => {
      const { clientWidth } = target;
      widthTraking(clientWidth);
      setWidth(clientWidth);
      issuingAfterSubmit(clientWidth);
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
  }, [isClick, ref, widthTraking, issuingAfterSubmit]);

  function handleAddCards() {
    setIsClick(!isClick);
  }

  const visibleMoviesData = moviesPath ? movies.slice(0, visibleMovies) : null;

  return (
    <section ref={ref}>
      <ul className="movies-card-list">
        {moviesPath
          ? visibleMoviesData.map((movie) => {
              return (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  addMovieToSaved={handleAddMovieToSaved}
                  deleteMovieFromSaved={handleDeleteMovieFromSaved}
                  userMovies={userMovies}
                />
              );
            })
          : savedMoviesPath
          ? savedMovies.map((movie) => {
              return (
                <MoviesCard
                  key={movie._id}
                  movie={movie}
                  deleteMovieFromSaved={handleDeleteMovieFromSaved}
                  userMovies={userMovies}
                  savedMovies={savedMovies}
                />
              );
            })
          : null}
      </ul>
      {moviesPath
        ? visibleMovies <= movies.length && (
            <MoviesButton handleAddCards={handleAddCards} />
          )
        : null}
    </section>
  );
}

export default MoviesCardList;

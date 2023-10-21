import './Movies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';
import { useLocation } from 'react-router-dom';

function Movies({
  setIsMobileMenuOpen,
  setIsPopupErrorOpen,
  setPopupErrorMessage,
  isLoading,
  setIsLoading,
  handleFilter,
  handleAddMovieToSaved,
  handleDeleteMovieFromSaved,
  userMovies,
}) {
  const location = useLocation();
  const savedMoviesPath = location.pathname === '/saved-movies';

  const localStorageSearchMovies =
    JSON.parse(localStorage.getItem('selectedFilms')) || [];
  const localStorageSearchSubmit = savedMoviesPath
    ? false
    : JSON.parse(localStorage.getItem('searchSumbit'));

  const [isSearchSumbit, setIsSearchSumbit] = useState(
    localStorageSearchSubmit
  );

  const [selectedFilms, setSelectedFilms] = useState(localStorageSearchMovies);
  const [errorMessage, setErrorMessage] = useState(false);

  function handleSearchResults(searchInputValue, isShort, isSearchSumbit) {
    if (localStorage.getItem('allMovies') === null) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((data) => {
          localStorage.setItem('allMovies', JSON.stringify(data));
          localStorage.setItem('searchSumbit', isSearchSumbit);
          processingResults(searchInputValue, isShort);
        })
        .catch((err) => {
          console.log(err);
          setIsPopupErrorOpen(true);
          setPopupErrorMessage(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      processingResults(searchInputValue, isShort);
    }
  }

  function processingResults(searchInputValue, isShort) {
    setErrorMessage(false);
    localStorage.setItem('searchInputValue', JSON.stringify(searchInputValue));
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    const filteredMovies = handleFilter(allMovies, searchInputValue, isShort);
    if (filteredMovies.length === 0) {
      setErrorMessage('Ничего не найдено');
    }
    localStorage.setItem('selectedFilms', JSON.stringify(filteredMovies));
    setSelectedFilms(filteredMovies);
  }

  return (
    <>
      <div className="movies">
        <Header>
          <Navigation setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </Header>
        <main>
          <SearchForm
            onSubmit={handleSearchResults}
            setIsPopupErrorOpen={setIsPopupErrorOpen}
            setPopupErrorMessage={setPopupErrorMessage}
            setIsSearchSumbit={setIsSearchSumbit}
            isSearchSumbit={isSearchSumbit}
          />
          {isLoading ? (
            <Preloader />
          ) : errorMessage ? (
            <div className="movies__error">Ничего не найдено</div>
          ) : (
            <MoviesCardList
              movies={selectedFilms}
              handleAddMovieToSaved={handleAddMovieToSaved}
              handleDeleteMovieFromSaved={handleDeleteMovieFromSaved}
              userMovies={userMovies}
              setIsSearchSumbit={setIsSearchSumbit}
              isSearchSumbit={isSearchSumbit}
            />
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Movies;

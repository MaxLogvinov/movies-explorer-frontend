import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function SavedMovies({
  setIsMobileMenuOpen,
  setIsPopupErrorOpen,
  setPopupErrorMessage,
  userMovies,
  handleFilter,
  handleDeleteMovieFromSaved,
  isChangeUserMovies,
  savedMovies,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isSearchSumbit, setIsSearchSumbit] = useState(false);

  function handleSearchSavedResults(searchInputValue, isShort) {
    setErrorMessage(false);
    const filteredMovies = handleFilter(userMovies, searchInputValue, isShort);
    setFilteredMovies(filteredMovies);
    setIsSearchSumbit(false);
    if (filteredMovies.length === 0) {
      setErrorMessage('Ничего не найдено');
    }
  }

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setFilteredMovies(userMovies);
    }
  }, [filteredMovies.length, userMovies]);

  return (
    <>
      <div className="saved-movies">
        <Header>
          <Navigation setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </Header>
        <main>
          <SearchForm
            onSubmit={handleSearchSavedResults}
            setIsPopupErrorOpen={setIsPopupErrorOpen}
            setPopupErrorMessage={setPopupErrorMessage}
            isChangeUserMovies={isChangeUserMovies}
            userMovies={userMovies}
            setIsSearchSumbit={setIsSearchSumbit}
            isSearchSumbit={isSearchSumbit}
          />
          {errorMessage ? (
            <div className="movies__error">Ничего не найдено</div>
          ) : (
            <MoviesCardList
              savedMovies={filteredMovies}
              userMovies={userMovies}
              handleDeleteMovieFromSaved={handleDeleteMovieFromSaved}
            />
          )}
          <div className="saved-movies__empty"></div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default SavedMovies;

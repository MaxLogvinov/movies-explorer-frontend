import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({
  onSubmit,
  setIsPopupErrorOpen,
  setPopupErrorMessage,
  isChangeUserMovies,
  userMovies,
  setIsSearchSumbit,
  isSearchSumbit,
}) {
  const location = useLocation();
  const savedMoviesPath = location.pathname === '/saved-movies';

  // const localStorageSavedInputValue = ' ';
  // savedMoviesPath
  //   ? localStorageSavedInputValue || ''
  //   :

  const localStorageSearchInputValue =
    JSON.parse(localStorage.getItem('searchInputValue')) || '';

  const localStorageIsShort = savedMoviesPath
    ? false
    : localStorage.getItem('isShort') === 'false' ||
      localStorage.getItem('isShort') === null
    ? false
    : true;

  const [isShort, setIsShort] = useState(localStorageIsShort);
  const [searchInputValue, setSearchInputValue] = useState(
    localStorageSearchInputValue
  );

  const [savedInputValue, setSavedInputValue] = useState('');

  function onChangeCheckBox(e) {
    setIsShort(e.target.checked);
    localStorage.setItem('isShort', e.target.checked);
    setIsSearchSumbit(true);
  }

  function handleChange(e) {
    if (savedMoviesPath) {
      setSavedInputValue(e.target.value);
    } else {
      setSearchInputValue(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSearchSumbit(true);
    if (searchInputValue.length > 0) {
      if (savedMoviesPath) {
        onSubmit(savedInputValue, isShort, isSearchSumbit);
      } else {
        onSubmit(searchInputValue, isShort, isSearchSumbit);
      }
    } else {
      setIsPopupErrorOpen(true);
      setPopupErrorMessage('Нужно ввести ключевое слово');
    }
  }

  useEffect(() => {
    if (isSearchSumbit === true) {
      if (savedMoviesPath) {
        onSubmit(savedInputValue, isShort, isSearchSumbit);
      } else {
        onSubmit(searchInputValue, isShort, isSearchSumbit);
      }
    } //eslint-disable-next-line
  }, [isShort, isSearchSumbit]);

  useEffect(() => {
    if (isChangeUserMovies) {
      onSubmit(savedInputValue, isShort, isSearchSumbit);
    } //eslint-disable-next-line
  }, [isShort, isChangeUserMovies, userMovies]);

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit} noValidate>
        <div className="search-form__input-container">
          <input
            placeholder="Фильм"
            type="text"
            required
            className="search-form__input"
            onChange={handleChange}
            // {savedMoviesPath ? value={searchInputValue || ''} : value={savedInputValue || ''}}
            value={
              savedMoviesPath ? savedInputValue || '' : searchInputValue || ''
            }
          ></input>
          <button type="submit" className="search-form__button">
            Поиск
          </button>
        </div>
        <FilterCheckbox onChangeCheckBox={onChangeCheckBox} isShort={isShort} />
      </form>
    </section>
  );
}

export default SearchForm;

import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import MobileMenu from '../MobileMenu/MobileMenu';
import api from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import PopupError from '../PopupError/PopupError';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupErrorOpen, setIsPopupErrorOpen] = useState(false);
  const [popupErrorMessage, setPopupErrorMessage] = useState('');
  const [userMovies, setUserMovies] = useState([]);
  const [isChangeUserMovies, setIsChangeUserMovies] = useState(false);

  const navigate = useNavigate();

  function handleClosePopup(e) {
    if (e.key === 'Escape') {
      setIsPopupErrorOpen(false);
    } else {
      setIsPopupErrorOpen(false);
    }
  }

  function handleRegister(name, email, password) {
    setIsLoading(true);
    api
      .register(name, email, password)
      .then((res) => {
        api.checkToken().then((res) => setCurrentUser(res));
        api.getSavedMovies().then((res) => {
          setUserMovies(res);
        });
        setIsLoggedIn(true);

        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
        setIsPopupErrorOpen(true);
        setPopupErrorMessage(
          'Ошибка регистрации: данный e-mail уже зарегестрирован'
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    api
      .login(email, password)
      .then((res) => {
        setIsLoggedIn(true);
        api.checkToken().then((res) => setCurrentUser(res));
        api.getSavedMovies().then((res) => {
          setUserMovies(res);
        });
        navigate('/movies', { replace: true });
      })

      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
        setIsPopupErrorOpen(true);
        setPopupErrorMessage('Ошибка входа: неверный логин и/или пароль');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const checkToken = useCallback(() => {
    api
      .checkToken()
      .then((res) => {
        if (!res) {
          return;
        }
        setCurrentUser(res);
        setIsLoggedIn(true);
        api.getSavedMovies().then((res) => {
          setUserMovies(res);
        });
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsInitialLoading(false);
      });
  }, []);

  useEffect(() => {
    checkToken();
    //eslint-disable-next-line
  }, []);

  function handleLogOut() {
    setIsLoading(true);
    api
      .logOut()
      .then((res) => {
        if (res) {
          setIsLoggedIn(false);
          setCurrentUser({});
          localStorage.clear();
        }
      })
      .catch((err) => {
        console.log(err);
        setIsPopupErrorOpen(true);
        setPopupErrorMessage('Что-то пошло не так...');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleChangeProfile(name, email) {
    setIsLoading(true);
    api
      .changeUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        setIsPopupErrorOpen(true);
        setPopupErrorMessage('Профиль успешно изменен');
      })
      .catch((err) => {
        console.log(err);
        setIsPopupErrorOpen(true);
        setPopupErrorMessage('При обновлении профиля произошла ошибка.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleFilter(allMovies, searchInputValue, isShort) {
    const filterAllMovies = allMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(searchInputValue.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchInputValue.toLowerCase())
      );
    });
    let filterShortMovies = [];
    if (isShort) {
      filterShortMovies = filterAllMovies.filter((movie) => {
        return movie.duration < 41;
      });
    }
    if (isShort) {
      return filterShortMovies;
    } else {
      return filterAllMovies;
    }
  }

  function handleAddMovieToSaved(movie) {
    api
      .createSaveMovie(movie)
      .then((newSavedMovie) => {
        setUserMovies([newSavedMovie, ...userMovies]);
        setIsChangeUserMovies(true);
      })
      .catch((err) => {
        console.log(err);
        setIsPopupErrorOpen(true);
        setPopupErrorMessage('Что-то пошло не так...');
      });
  }

  function handleDeleteMovieFromSaved(deletedMovie) {
    const updatedSavedMovies = userMovies.filter(
      (movie) => movie._id !== deletedMovie._id
    );
    api
      .removeSavedMovie(deletedMovie._id)
      .then(() => {
        setUserMovies(updatedSavedMovies);
        setIsChangeUserMovies(true);
      })

      .catch((err) => {
        console.log(err);
        setIsPopupErrorOpen(true);
        setPopupErrorMessage('Что-то пошло не так...');
      });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        {isInitialLoading ? (
          <Preloader />
        ) : (
          <div className="App">
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    isLoggedIn={isLoggedIn}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                  />
                }
              />
              <Route
                path="/signup"
                element={<Register onRegister={handleRegister} />}
              />
              <Route path="/signin" element={<Login onLogin={handleLogin} />} />
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    element={Movies}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    setIsPopupErrorOpen={setIsPopupErrorOpen}
                    setPopupErrorMessage={setPopupErrorMessage}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    handleFilter={handleFilter}
                    handleAddMovieToSaved={handleAddMovieToSaved}
                    handleDeleteMovieFromSaved={handleDeleteMovieFromSaved}
                    userMovies={userMovies}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    element={SavedMovies}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    setIsPopupErrorOpen={setIsPopupErrorOpen}
                    setPopupErrorMessage={setPopupErrorMessage}
                    userMovies={userMovies}
                    handleFilter={handleFilter}
                    handleDeleteMovieFromSaved={handleDeleteMovieFromSaved}
                    isChangeUserMovies={isChangeUserMovies}
                  />
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    element={Profile}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    onLogOut={handleLogOut}
                    onChangeProfile={handleChangeProfile}
                    isLoading={isLoading}
                  />
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <MobileMenu
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <PopupError
              isOpen={isPopupErrorOpen}
              onClose={handleClosePopup}
              message={popupErrorMessage}
            />
          </div>
        )}
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;

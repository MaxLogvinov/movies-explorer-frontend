import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import MobileMenu from '../MobileMenu/MobileMenu';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            }
          />
          <Route
            path="/movies"
            element={<Movies setIsMobileMenuOpen={setIsMobileMenuOpen} />}
          />
          <Route
            path="/saved-movies"
            element={<SavedMovies setIsMobileMenuOpen={setIsMobileMenuOpen} />}
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route
            path="/profile"
            element={<Profile setIsMobileMenuOpen={setIsMobileMenuOpen} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </>
  );
}

export default App;

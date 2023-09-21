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

  // Попробовал я прогнать через w3с валидатор, через ссылку на гитхаб до папки компонетс - не получилось, показывает фигню, не знаю как адекватно достать дерево тэгов, чтобы проверить

  //поисковой инпут стилизован верно, ничего для фокуса в макете нет + фокус на инпутах формы установлен по макету + в профиле сделал такой же фокус

  // В app.css указан дополнительный шрифт font-family: 'Inter', Arial, sans-serif; или нужен еще один?

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

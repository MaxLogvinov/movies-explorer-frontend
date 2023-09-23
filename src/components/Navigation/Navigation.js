import './Navigation.css';

import { Link, NavLink } from 'react-router-dom';

function Navigation({ setIsMobileMenuOpen }) {
  return (
    <>
      <div className="header__navigation">
        <nav className="header__navigation-links">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `header__navigation-link ${
                isActive ? 'header__navigation-link_type_checked' : ''
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `header__navigation-link ${
                isActive ? 'header__navigation-link_type_checked' : ''
              }`
            }
          >
            Сохранённые фильмы
          </NavLink>
          <Link to="/profile" className="header__navigation-container ">
            <p className="header__navigation-account">Аккаунт</p>
            <span className="header__navigation-icon"></span>
          </Link>
        </nav>
      </div>
      <button
        type="button"
        className="header__navigation-button"
        onClick={() => setIsMobileMenuOpen(true)}
      ></button>
    </>
  );
}

export default Navigation;

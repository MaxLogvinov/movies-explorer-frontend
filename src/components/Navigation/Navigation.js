import './Navigation.css';

import { Link, NavLink } from 'react-router-dom';

function Navigation({ setIsMobileMenuOpen }) {
  return (
    <>
      <section className="header-navigation">
        <nav className="header-navigation__links">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `header-navigation__link ${
                isActive ? 'header-navigation__link_type_checked' : ''
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `header-navigation__link ${
                isActive ? 'header-navigation__link_type_checked' : ''
              }`
            }
          >
            Сохранённые фильмы
          </NavLink>
          <Link to="/profile" className="header-navigation__container ">
            <p className="header-navigation__account">Аккаунт</p>
            <span className="header-navigation__icon"></span>
          </Link>
        </nav>
      </section>
      <button
        type="button"
        className="header-navigation__button"
        onClick={() => setIsMobileMenuOpen(true)}
      ></button>
    </>
  );
}

export default Navigation;

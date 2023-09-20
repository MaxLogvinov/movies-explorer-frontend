import './Navigation.css';

import { Link, NavLink } from 'react-router-dom';

function Navigation({ setIsMobileMenuOpen }) {
  return (
    <>
      <section className="navigation">
        <div className="navigation__links">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `navigation__link ${
                isActive ? 'navigation__link_type_checked' : ''
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `navigation__link ${
                isActive ? 'navigation__link_type_checked' : ''
              }`
            }
          >
            Сохранённые фильмы
          </NavLink>
          <Link to="/profile" className="navigation__container ">
            <p className="navigation__account">Аккаунт</p>
            <span className="navigation__icon"></span>
          </Link>
        </div>
      </section>
      <button
        type="button"
        className="navigation__button"
        onClick={() => setIsMobileMenuOpen(true)}
      ></button>
    </>
  );
}

export default Navigation;

import './MobileMenu.css';

import { Link, NavLink } from 'react-router-dom';

function MobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <>
      <aside
        className={` mobile-menu
                ${isMobileMenuOpen ? 'mobile-menu_opened' : ''}
            `}
      >
        <div className="mobile-menu__container">
          <button
            type="button"
            className="mobile-menu__button"
            onClick={() => setIsMobileMenuOpen(false)}
          ></button>
          <div className="mobile-menu__links">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `mobile-menu__link ${
                  isActive ? 'mobile-menu__link_type_checked' : ''
                }`
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `mobile-menu__link ${
                  isActive ? 'mobile-menu__link_type_checked' : ''
                }`
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `mobile-menu__link mobile-menu__link_type_width ${
                  isActive ? 'mobile-menu__link_type_checked' : ''
                }`
              }
            >
              Сохранённые фильмы
            </NavLink>
            <Link
              to="/profile"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-menu__box"
            >
              <p className="mobile-menu__account">Аккаунт</p>
              <span className="mobile-menu__icon"></span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

export default MobileMenu;

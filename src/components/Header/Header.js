import './Header.css';
import headerLogo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header({ children }) {
  const location = useLocation();
  return (
    <>
      <header
        className={`header ${
          location.pathname === '/' ? 'header_theme_blue' : ''
        }`}
      >
        <Link to="/">
          <img
            src={headerLogo}
            alt="Логотип проекта"
            className={`header__logo ${
              location.pathname === '/signup' || location.pathname === '/signin'
                ? 'header__logo_type_form'
                : ''
            }`}
          ></img>
        </Link>
        {children}
      </header>
    </>
  );
}

export default Header;

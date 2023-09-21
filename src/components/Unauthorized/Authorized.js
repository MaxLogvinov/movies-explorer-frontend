import './Authorized.css';

import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <>
      <nav className="header__unauthorized-links">
        <Link
          to="/signup"
          className="header__unauthorized-link header__unauthorized-link_type_signup"
        >
          Регистрация
        </Link>
        <Link
          to="/signin"
          className="header__unauthorized-link header__unauthorized-link_type_signin"
        >
          Войти
        </Link>
      </nav>
    </>
  );
}

export default Unauthorized;

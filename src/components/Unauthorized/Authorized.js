import './Authorized.css';

import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <>
      <div className="unauthorized__links">
        <Link
          to="/signup"
          className="unauthorized__link unauthorized__link_type_signup"
        >
          Регистрация
        </Link>
        <Link
          to="/signin"
          className="unauthorized__link unauthorized__link_type_signin"
        >
          Войти
        </Link>
      </div>
    </>
  );
}

export default Unauthorized;

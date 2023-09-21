import Header from '../Header/Header';
import './Form.css';
import { Link, useLocation } from 'react-router-dom';

function Form({ children, title, name, buttonText, formText, link, linkText }) {
  const location = useLocation();
  return (
    <main>
      <section className="form">
        <div className="form__header">
          <Header />
        </div>
        <form className="form__container" name={name}>
          <h1 className="form__title">{title}</h1>
          {children}
          <button
            type="submit"
            className={`form__button ${
              location.pathname === '/signin' ? 'form__button_type_login' : ''
            }`}
          >
            {buttonText}
          </button>
        </form>
        <div className="form__link-container">
          <span className="form__text">{formText}</span>
          <Link to={link} className="form__link">
            {linkText}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Form;

import Header from '../Header/Header';
import './Form.css';
import { Link, useLocation } from 'react-router-dom';

function Form({
  children,
  title,
  name,
  onSubmit,
  buttonText,
  formText,
  link,
  linkText,
  isValid,
  isLoading,
}) {
  const location = useLocation();

  return (
    <section className="form">
      <div className="form__header">
        <Header />
      </div>
      <form
        className="form__container"
        name={name}
        noValidate
        onSubmit={onSubmit}
      >
        <h1 className="form__title">{title}</h1>
        {children}
        <button
          type="submit"
          className={
            isValid && !isLoading
              ? `form__button ${
                  location.pathname === '/signin'
                    ? 'form__button_type_login'
                    : ''
                } `
              : `form__button ${
                  location.pathname === '/signin'
                    ? 'form__button_type_login'
                    : ''
                } form__button_disabled`
          }
          disabled={!isValid || isLoading}
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
  );
}

export default Form;

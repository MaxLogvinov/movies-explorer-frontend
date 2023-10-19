import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { regexEmail, regexName } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function Profile({
  setIsMobileMenuOpen,
  onLogOut,
  onChangeProfile,
  isLoading,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { name, email } = currentUser;

  const [values, setValues] = useState({
    name: name,
    email: email,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const [isValid, setIsValid] = useState(false);
  const [isChange, setIsChange] = useState(false);

  const handleChange = (e) => {
    const { name, value, validationMessage } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validationMessage,
    });

    setIsValid(e.target.closest('form').checkValidity());
  };

  useEffect(() => {
    setValues({ name, email });
  }, [name, email]);

  useEffect(() => {
    if (!(name === values.name && email === values.email)) {
      setIsChange(true);
    } else {
      setIsChange(false);
      setIsValid(false);
    }
  }, [name, email, values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeProfile(values.name, values.email);
  };

  return (
    <div className="profile">
      <Header>
        <Navigation setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </Header>
      <main className="profile__page">
        <h1 className="profile__title">{`Привет, ${currentUser.name}`}</h1>
        {isLoading ? (
          <Preloader />
        ) : (
          <form onSubmit={handleSubmit} noValidate className="profile__form">
            <div className="profile__container">
              <label className="profile__label">Имя</label>
              <input
                className="profile__input"
                type="text"
                minLength="2"
                maxLength="30"
                name="name"
                required
                placeholder="Виталий"
                onChange={handleChange}
                pattern={regexName}
                value={values.name}
              ></input>{' '}
            </div>
            <span className="profile__error">{errors.name}</span>
            <div className="profile__line"></div>
            <div className="profile__container">
              <label className="profile__label">E‑mail</label>
              <input
                className="profile__input"
                type="email"
                required
                name="email"
                minLength="2"
                maxLength="40"
                placeholder="pochta@yandex.ru"
                onChange={handleChange}
                pattern={regexEmail}
                value={values.email}
              ></input>{' '}
            </div>
            <span className="profile__error">{errors.email}</span>
            <button
              type="submit"
              disabled={!isValid && !isChange}
              className={
                isValid
                  ? 'profile__button profile__button_type_edit'
                  : 'profile__button '
              }
            >
              Редактировать
            </button>
          </form>
        )}
        <Link to="/" onClick={onLogOut} className="profile__logout">
          Выйти из аккаунта
        </Link>
      </main>
    </div>
  );
}

export default Profile;

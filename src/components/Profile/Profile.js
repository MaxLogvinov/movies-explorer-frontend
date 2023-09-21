import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Profile({ setIsMobileMenuOpen }) {
  return (
    <main>
      <section className="profile">
        <Header>
          <Navigation setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </Header>
        <div className="profile__page">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <div className="profile__container">
              <label className="profile__label">Имя</label>
              <input
                className="profile__input"
                type="text"
                minLength="2"
                maxLength="30"
                required
                defaultValue="Виталий"
              ></input>{' '}
            </div>
            <span className="profile__error"></span>
            <div className="profile__line"></div>
            <div className="profile__container">
              <label className="profile__label">E‑mail</label>
              <input
                className="profile__input"
                type="email"
                required
                defaultValue="pochta@yandex.ru"
              ></input>{' '}
            </div>
            <span className="profile__error"></span>
          </form>
          <button type="submit" className="profile__button">
            Редактировать
          </button>
          <Link to="/" className="profile__logout">
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Profile;

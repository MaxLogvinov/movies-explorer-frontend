import Form from '../Form/Form';
import './Register.css';

function Register() {
  return (
    <main>
      <Form
        title="Добро пожаловать!"
        name="register"
        buttonText="Зарегистрироваться"
        formText="Уже зарегистрированы?"
        link="/signin"
        linkText="Войти"
      >
        <label className="form__label">Имя</label>
        <input
          className="form__input"
          type="text"
          minLength="2"
          maxLength="30"
          required
          placeholder="Введите имя"
        />
        <span className="form__error"></span>
        <label className="form__label">E-mail</label>
        <input
          className="form__input"
          type="email"
          placeholder="Введите email"
        />
        <span className="form__error"></span>
        <label className="form__label">Пароль</label>
        <input
          className="form__input"
          type="password"
          required
          minLength="2"
          maxLength="40"
          placeholder="Введите пароль"
        />
        <span className="form__error"></span>
      </Form>
    </main>
  );
}

export default Register;

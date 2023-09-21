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
        <label className="register__label">Имя</label>
        <input
          className="register__input"
          type="text"
          minLength="2"
          maxLength="30"
          required
          placeholder="Введите имя"
        />
        <span className="register__error"></span>
        <label className="register__label">E-mail</label>
        <input
          className="register__input"
          type="email"
          placeholder="Введите email"
        />
        <span className="register__error"></span>
        <label className="register__label">Пароль</label>
        <input
          className="register__input"
          type="password"
          required
          minLength="2"
          maxLength="40"
          placeholder="Введите пароль"
        />
        <span className="register__error"></span>
      </Form>
    </main>
  );
}

export default Register;

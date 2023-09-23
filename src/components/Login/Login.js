import Form from '../Form/Form';
import '../Register/Register.css';

function Login() {
  return (
    <main>
      <Form
        title="Рады видеть!"
        name="login"
        buttonText="Войти"
        formText="Ещё не зарегистрированы?"
        link="/signup"
        linkText="Регистрация"
      >
        <label className="form__label">E-mail</label>
        <input
          className="form__input"
          type="email"
          placeholder="Введите email"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__error"></span>
        <label className="form__label">Пароль</label>
        <input
          className="form__input"
          type="password"
          required
          placeholder="Введите пароль"
          minLength="2"
          maxLength="40"
        />
        <span className="form__error"></span>
      </Form>
    </main>
  );
}

export default Login;

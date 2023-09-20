import Form from '../Form/Form';
import '../Register/Register.css';

function Login() {
  return (
    <Form
      title="Рады видеть!"
      name="login"
      buttonText="Войти"
      formText="Ещё не зарегистрированы?"
      link="/signup"
      linkText="Регистрация"
    >
      <label className="register__label">E-mail</label>
      <input
        className="register__input"
        type="email"
        placeholder="Введите email"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="register__error"></span>
      <label className="register__label">Пароль</label>
      <input
        className="register__input"
        type="password"
        required
        placeholder="Введите пароль"
      />
      <span className="register__error"></span>
    </Form>
  );
}

export default Login;

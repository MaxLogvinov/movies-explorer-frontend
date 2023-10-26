import Form from '../Form/Form';
import '../Register/Register.css';
import { useState } from 'react';
import { regexEmail } from '../../utils/constants';

function Login({ onLogin }) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values.email, values.password);
    setValues({});
  };
  return (
    <main>
      <Form
        title="Рады видеть!"
        name="login"
        buttonText="Войти"
        formText="Ещё не зарегистрированы?"
        link="/signup"
        linkText="Регистрация"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <label className="form__label">E-mail</label>
        <input
          className="form__input"
          type="email"
          placeholder="Введите email"
          minLength="2"
          maxLength="30"
          required
          name="email"
          onChange={handleChange}
          pattern={regexEmail}
        />
        <span className="form__error">{errors.email}</span>
        <label className="form__label">Пароль</label>
        <input
          className="form__input"
          type="password"
          required
          placeholder="Введите пароль"
          minLength="2"
          maxLength="30"
          name="password"
          onChange={handleChange}
        />
        <span className="form__error">{errors.password}</span>
      </Form>
    </main>
  );
}

export default Login;

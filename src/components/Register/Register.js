import Form from '../Form/Form';
import './Register.css';
import { useState } from 'react';
import { regexEmail, regexName } from '../../utils/constants';

function Register({ onRegister }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
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
    onRegister(values.name, values.email, values.password);
    setValues({});
  };

  return (
    <main>
      <Form
        title="Добро пожаловать!"
        name="register"
        buttonText="Зарегистрироваться"
        formText="Уже зарегистрированы?"
        link="/signin"
        linkText="Войти"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <label className="form__label">Имя</label>
        <input
          className="form__input"
          type="text"
          minLength="2"
          maxLength="30"
          required
          placeholder="Введите имя"
          name="name"
          onChange={handleChange}
          pattern={regexName}
        />
        <span className="form__error">{errors.name}</span>
        <label className="form__label">E-mail</label>
        <input
          className="form__input"
          type="email"
          placeholder="Введите email"
          name="email"
          onChange={handleChange}
          required
          pattern={regexEmail}
        />
        <span className="form__error">{errors.email}</span>
        <label className="form__label">Пароль</label>
        <input
          className="form__input"
          type="password"
          required
          minLength="2"
          maxLength="40"
          placeholder="Введите пароль"
          name="password"
          onChange={handleChange}
        />
        <span className="form__error">{errors.password}</span>
      </Form>
    </main>
  );
}

export default Register;

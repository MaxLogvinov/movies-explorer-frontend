const MAIN_API_URL = 'http://api.diploma.maxlogvinov.nomoredomainsicu.ru/';
class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Код ошибки: ${res.status}`);
    }
  }

  register(name, email, password) {
    return fetch(`${this._url}signup`, {
      headers: this._headers,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((res) => this._checkResponse(res));
  }

  login(email, password) {
    return fetch(`${this._url}signin`, {
      headers: this._headers,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this._checkResponse(res));
  }

  checkToken() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  }

  logOut() {
    return fetch(`${this._url}signout`, {
      headers: this._headers,
      method: 'POST',
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  }

  changeUserInfo(name, email) {
    return fetch(`${this._url}users/me`, {
      headers: this._headers,
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getSavedMovies() {
    return fetch(`${this._url}movies`, {
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  }

  createSaveMovie(movieData) {
    return fetch(`${this._url}movies`, {
      headers: this._headers,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        ...movieData,
      }),
    }).then((res) => this._checkResponse(res));
  }

  removeSavedMovie(movieId) {
    return fetch(`${this._url}movies/${movieId}`, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  url: MAIN_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

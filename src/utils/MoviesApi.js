const BFM_API_URL = ' https://api.nomoreparties.co/beatfilm-movies';
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

  getMovies() {
    return fetch(this._url, {
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const moviesApi = new Api({
  url: BFM_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;

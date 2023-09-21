import './MoviesCard.css';
import pictureFilm from '../../images/film.jpg';

function MoviesCard({ children }) {
  const name = 'Название фильма';
  return (
    <main>
      <li className="card">
        <div className="card__container">
          <h2 className="card__title">В погоне за Бенкси</h2>
          <p className="card__duration">0ч 42м</p>
        </div>
        <img className="card__image" src={pictureFilm} alt={name}></img>
        <button
          type="button"
          className="card__button card__button_type_added card__button_type_delete"
        >
          Сохранить
        </button>
      </li>
    </main>
  );
}

export default MoviesCard;

// card__button

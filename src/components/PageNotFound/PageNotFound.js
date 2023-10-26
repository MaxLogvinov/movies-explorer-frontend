import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__description">Страница не найдена</p>
        <button onClick={() => navigate(-1)} className="not-found__button">
          Назад
        </button>
      </section>
    </main>
  );
}

export default PageNotFound;

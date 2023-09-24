import './MoviesCardList.css';

function MoviesCardList({ children }) {
  return (
    <section>
      <ul className="movies-card-list">{children}</ul>
    </section>
  );
}

export default MoviesCardList;

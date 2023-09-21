import './MoviesCardList.css';

function MoviesCardList({ children }) {
  return (
    <main>
      <section>
        <ul className="movies-card-list">{children}</ul>
      </section>
    </main>
  );
}

export default MoviesCardList;

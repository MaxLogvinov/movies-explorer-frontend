import './MoviesButton.css';

function MoviesButton({ handleAddCards }) {
  return (
    <>
      <div className="movies-button">
        <button
          type="button"
          className="movies-button__element"
          onClick={handleAddCards}
        >
          Ещё
        </button>
      </div>
    </>
  );
}

export default MoviesButton;

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <main>
      <section className="search-form">
        <form>
          <div className="search-form__input-container">
            <input
              placeholder="Фильм"
              type="text"
              required
              className="search-form__input"
            ></input>
            <button type="submit" className="search-form__button">
              Поиск
            </button>
          </div>
          <FilterCheckbox />
        </form>
      </section>
    </main>
  );
}

export default SearchForm;

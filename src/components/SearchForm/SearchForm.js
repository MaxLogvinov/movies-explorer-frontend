import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__input-container">
        <input
          placeholder="Фильм"
          type="text"
          required
          className="search-form__input"
        ></input>
        <button type="submit" className="search-form__button">
          Поиск
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;

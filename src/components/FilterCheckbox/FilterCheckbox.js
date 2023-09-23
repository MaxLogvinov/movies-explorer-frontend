import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <>
      <article>
        <label className="search-form__filter-checkbox">
          <input
            type="checkbox"
            className="search-form__filter-checkbox-input"
          ></input>
          <span className="search-form__filter-checkbox-checkbox"></span>
        </label>
        <span className="search-form__filter-checkbox-text">
          Короткометражки
        </span>
        <span className="search-form__filter-checkbox-line"></span>
      </article>
    </>
  );
}

export default FilterCheckbox;

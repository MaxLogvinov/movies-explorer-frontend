import './FilterCheckbox.css';

function FilterCheckbox({ onChangeCheckBox, isShort }) {
  return (
    <>
      <article>
        <label className="search-form__filter-checkbox">
          <input
            type="checkbox"
            className="search-form__filter-checkbox-input"
            checked={isShort}
            onChange={onChangeCheckBox}
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

import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <>
      <main>
        <section>
          <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__input"></input>
            <span className="filter-checkbox__checkbox"></span>
          </label>
          <span className="filter-checkbox__text">Короткометражки</span>
          <span className="filter-checkbox__line"></span>
        </section>
      </main>
    </>
  );
}

export default FilterCheckbox;

import './Portfolio.css';

function Portfolio() {
  return (
    <main>
      <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__links">
          <li>
            <a
              className="portfolio__link"
              href="https://github.com/MaxLogvinov/how-to-learn"
              target="blank"
            >
              Статичный сайт
              <span className="portfolio__arrow"></span>
            </a>
          </li>
          <li>
            <a
              className="portfolio__link"
              href="https://github.com/MaxLogvinov/russian-travel"
              target="blank"
            >
              Адаптивный сайт
              <span className="portfolio__arrow"></span>
            </a>
          </li>
          <li>
            <a
              className="portfolio__link portfolio__link_type_border"
              href="https://github.com/MaxLogvinov/react-mesto-api-full-gha"
              target="blank"
            >
              Одностраничное приложение
              <span className="portfolio__arrow"></span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Portfolio;

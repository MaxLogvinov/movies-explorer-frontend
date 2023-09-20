import './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>

        <ul className="footer__links">
          <li>
            <a
              className="footer__link"
              target="blank"
              href="https://practicum.yandex.ru/"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              target="blank"
              href="https://github.com/"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;

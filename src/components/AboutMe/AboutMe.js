import './AboutMe.css';
import Vit from '../../images/Vit.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__container">
        <div className="about-me__info">
          <h2 className="about-me__heading">Виталий</h2>
          <p className="about-me__occupation">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="https://github.com/MaxLogvinov"
            target="blank"
            className="about-me__link"
          >
            Github
          </a>
        </div>
        <img src={Vit} alt="Фото студента" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;

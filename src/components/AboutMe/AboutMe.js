import './AboutMe.css';
import Me from '../../images/me.jpeg';

function AboutMe() {
  return (
    <section className="about-me">
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__container">
        <div className="about-me__info">
          <h2 className="about-me__heading">Максим</h2>
          <p className="about-me__occupation">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Привет! Мой интерес к данной сфере возник, когда я начал замечать,
            как современный мир полон удивительных веб-приложений, которые
            оказывают огромное влияние на нашу жизнь. Возможность создавать
            интерактивные и интуитивно понятные пользовательские интерфейсы,
            которые значительно улучшают опыт пользователей и делают их жизнь
            проще и интереснее. Мой выбор смены карьеры основан на осознанности
            и стремлении достичь совершенства в новой области. Я осознаю, что
            веб-разработка требует не только технических навыков, но и
            креативности, умения понимать нужды пользователей и создавать
            удобные интерфейсы. Я готов внести все свои знания, усердно работать
            и непрерывно развиваться, чтобы достигнуть успеха в этой профессии.
            В свободное время занимаюсь спортом(фитнес), смотрю блоги и подкасты
            о IT-разработке, люблю посещать новые места/города.
          </p>
          <a
            href="https://github.com/MaxLogvinov"
            target="blank"
            className="about-me__link"
          >
            Github
          </a>
        </div>
        <img src={Me} alt="Фото студента" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;

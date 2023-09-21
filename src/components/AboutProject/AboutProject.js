import './AboutProject.css';

function AboutProject() {
  return (
    <main>
      <section className="about-project" id="about-project">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__container">
          <div className="about-project__text-block">
            <h3 className="about-project__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__text-block">
            <h3 className="about-project__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__timeline">
          <div className="about-project__timeline-timing about-project__timeline-timing_type_green">
            <p className="about-project__timeline-paragraph">1 неделя</p>
          </div>
          <div className="about-project__timeline-timing about-project__timeline-timing_type_gray">
            <p className="about-project__timeline-paragraph">4 недели</p>
          </div>
          <p className="about-project__timeline-text">Back-end</p>
          <p className="about-project__timeline-text">Front-end</p>
        </div>
      </section>
    </main>
  );
}

export default AboutProject;

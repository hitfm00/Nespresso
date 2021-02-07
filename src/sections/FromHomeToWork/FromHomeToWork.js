import React from 'react';
import { Container } from 'react-bootstrap';
import ArrowDown from '../../components/svg/ArrowDown';
import s from './style.module.scss';

export default function FromHomeToWork() {
  return (
    <section className={s.fromHomeToWork}>
      <button className={s.fromHomeToWork__buyCarButton}>
        <span className={s.fromHomeToWork__buyCarButtonTitle}>
          לרכישת מכונת
        </span>
        <span className={s.fromHomeToWork__buyCarButtonText}>
          {'<< VERTUO PLUS'}
        </span>
      </button>
      <Container>
        <div className={s.fromHomeToWork__textBlock}>
          <h1 className={`title--80 ${s.fromHomeToWork__title}`}>
            מהבית לעבודה
          </h1>
          <p className={s.fromHomeToWork__text}>
            השנה האחרונה לימדה אותנו שלפעמים אנחנו באמת ישנים במשרד, אז הנה כל
            מה שצריך לדעת כדי לגרום לבית שלכם לעבוד
          </p>
          <button className={s.fromHomeToWork__arrowDown}>
            <ArrowDown
              className={`svg__hover--outline ${s.fromHomeToWork__arrowDownImg}`}
            />
          </button>
        </div>
      </Container>
    </section>
  );
}

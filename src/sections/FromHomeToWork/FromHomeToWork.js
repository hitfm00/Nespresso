import React from 'react';
import arrowDown from '../../assets/img/arrow-down.svg';
import s from './style.module.scss';

export default function FromHomeToWork() {
  return (
    <section class={s.fromHomeToWork}>
      <div className={s.fromHomeToWork__bgBrown}></div>
      <div className={s.fromHomeToWork__textBlock}>
        <h1 className={s.fromHomeToWork__title}>מהבית לעבודה</h1>
        <p className={s.fromHomeToWork__text}>
          השנה האחרונה לימדה אותנו שלפעמים אנחנו באמת ישנים במשרד, אז הנה כל מה
          שצריך לדעת כדי לגרום לבית שלכם לעבוד
        </p>
        <button className={s.fromHomeToWork__arrowDown}>
          <img
            src={arrowDown}
            alt="Arrow Down"
            className={s.fromHomeToWork__arrowDownImg}
          />
        </button>
      </div>
    </section>
  );
}

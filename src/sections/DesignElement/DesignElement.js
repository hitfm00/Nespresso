import React from 'react';
import DesignList from './DesignList';
import s from './style.module.scss';

export default function DesignElement() {
  return (
    <section className={s.designElement}>
      <div className={s.designElement__block}>
        <h4 className={`title--70 ${s.designElement__title}`}>
          מה אפשר לדעת עליך לפי הפריט העיצובי בחדר העבודה שלך
        </h4>
        <p className={s.designElement__text}>
          כי האמת היא שמספיקה ישיבת זום אחת כדי שידעו עליך יותר ממה שרצית לספר
        </p>
      </div>
      <DesignList />
    </section>
  );
}

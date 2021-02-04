import React from 'react';
import arrowDown from '../../assets/img/arrow-down.svg';
import Btn from '../../components/Btn/Btn';
import s from './style.module.scss';

export default function OfficeControl() {
  return (
    <section class={s.officeControl}>
      <div className={s.officeControl__bgBrown}></div>
      <div className={s.officeControl__textBlock}>
        <h1 className={s.officeControl__title}>שליטה באופיס</h1>
        <p className={s.officeControl__text}>
          קבלו טיפים של מעצבות פנים לחדר העבודה הביתי שלכם. לא, כי הלפטופ עליכם
          עם הפוך בסלון לא יעבוד לאורך זמן
        </p>
      </div>
    </section>
  );
}

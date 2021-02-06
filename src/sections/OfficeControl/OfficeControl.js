import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.scss';

export default function OfficeControl() {
  return (
    <section class={s.officeControl}>
      <div className={s.officeControl__textBlock}>
        <h1 className={`title--80 ${s.officeControl__title}`}>שליטה באופיס</h1>
        <p className={s.officeControl__text}>
          קבלו טיפים של מעצבות פנים לחדר העבודה הביתי שלכם. לא, כי הלפטופ עליכם
          עם הפוך בסלון לא יעבוד לאורך זמן
        </p>
        <NavLink
          className={`btn__outline ${s.officeControl__button}`}
          to="/office_control"
        >
          {'<< לכתבה מלאה'}
        </NavLink>
      </div>
    </section>
  );
}

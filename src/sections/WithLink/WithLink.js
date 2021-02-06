import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.scss';

export default function WithLink(props) {
  const { title, text, linkTo, className } = props;
  return (
    <section className={s.withLink}>
      <div className={s.withLink__textBlock}>
        <h1 className={`title--80 ${s.withLink__title}`}>{title}</h1>
        <p className={s.withLink__text}>{text}</p>
        <NavLink className={`btn__outline ${s.withLink__button}`} to={linkTo}>
          {'<< לכתבה מלאה'}
        </NavLink>
      </div>
    </section>
  );
}

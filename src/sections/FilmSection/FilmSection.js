import React from 'react';
import Play from '../../components/svg/Play';
import s from './style.module.scss';

export default function FilmSection(props) {
  const { title, className } = props;
  return (
    <section className={s.filmSection}>
      <div className={s.filmSection__leftBlock}>
        <button>
          <Play className={`svg__hover ${s.filmSection__img}`} />
        </button>
        <h4 className={s.filmSection__title}>{title}</h4>
      </div>
      <div className={`${className} ${s.filmSection__rightBlock}`}></div>
    </section>
  );
}

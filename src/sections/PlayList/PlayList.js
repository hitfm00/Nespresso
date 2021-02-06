import React from 'react';
import s from './style.module.scss';
import img1 from '../../assets/img/playList1.png';
import img2 from '../../assets/img/playList2.png';
import img3 from '../../assets/img/playList3.png';
import play from '../../assets/img/play.svg';

export default function PlayList() {
  return (
    <section class={s.playList}>
      <div className={s.playList__textBlock}>
        <h4 className={s.playList__title}>
          בנינו עבורכם את הפלייליסט האולטימטיבי למשרד הביתי
        </h4>
        <p className={s.playList__text}>
          לכל הרגעים הכי מאתגרים במהלך העבודה מהבית. כי רק קפה טוב זה לא תמיד
          מספיק
        </p>
        <ul className={s.playList__list}>
          <li className={s.playList__item}>
            <img src="" alt="" />
          </li>
          <li className={s.playList__item}>
            <img src="" alt="" />
          </li>
          <li className={s.playList__item}>
            <img src="" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}

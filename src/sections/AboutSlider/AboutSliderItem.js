import React from 'react';
import s from './style.module.scss';
import coffeeImg from '../../assets/img/designElement4.png';

export default function AboutSliderItem() {
  return (
    <div className={s.aboutSlider__item}>
      <div className={s.aboutSlider__itemBlock}>
        <img src={coffeeImg} alt="" />
        <p>מתקדמים ל-ורטו של Nespresso. החלק הכי כיפי ביום העבודה שלך. </p>
      </div>
      <div>
        <div className={s.aboutSlider__itemBlock}>
          <img src={coffeeImg} alt="" />
          <p>מתקדמים ל-ורטו של Nespresso. החלק הכי כיפי ביום העבודה שלך. </p>
        </div>
      </div>
    </div>
  );
}

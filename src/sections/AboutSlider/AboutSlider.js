import React from 'react';
import s from './style.module.scss';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import aboutSliderImg from '../../assets/img/designElement4.png';
import aboutSliderImg2 from '../../assets/img/aboutSlider2.png';
import { Container } from 'react-bootstrap';

export default function AboutSlider() {
  return (
    <section className={s.aboutSlider}>
      <Container className="d-flex justify-content-center align-items-center flex-column">
        <div className={s.aboutSlider__textBlock}>
          <h4 className="title--80">במקום זה, מתקדמים לזה</h4>
          <div className="d-flex justify-content-center align-items-center h-100">
            <p className={s.aboutSlider__mainTitle}>
              כי האמת היא שמספיקה ישיבת זום אחת כדי שידעו עליך יותר ממה שרצית
              לספר
            </p>
          </div>
        </div>
        <div className={s.aboutSlider__sliderWrapper}>
          <AwesomeSlider animation="open" className={s.aboutSlider__slider}>
            <div className={s.aboutSlider__item}>
              <div className={s.aboutSlider__itemBlock}>
                <img
                  src={aboutSliderImg}
                  alt=""
                  className={s.aboutSlider__img}
                />
                <div className="d-flex justify-content-center align-items-center h-100">
                  <p className={s.aboutSlider__title}>
                    מתקדמים ל-ורטו של Nespresso. החלק הכי כיפי ביום העבודה שלך.{' '}
                  </p>
                </div>
              </div>
              <div className={s.aboutSlider__itemBlock}>
                <img
                  src={aboutSliderImg2}
                  alt=""
                  className={s.aboutSlider__img}
                />
                <div className="d-flex justify-content-center align-items-center h-100">
                  <p className={s.aboutSlider__title}>
                    מתקדמים ל-ורטו של Nespresso. החלק הכי כיפי ביום העבודה שלך.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className={s.aboutSlider__item}>
              <div className={s.aboutSlider__itemBlock}>
                <img
                  src={aboutSliderImg}
                  alt=""
                  className={s.aboutSlider__img}
                />
                <div className="d-flex justify-content-center align-items-center h-100">
                  <p className={s.aboutSlider__title}>
                    מתקדמים ל-ורטו של Nespresso. החלק הכי כיפי ביום העבודה שלך.{' '}
                  </p>
                </div>
              </div>
              <div className={s.aboutSlider__itemBlock}>
                <img
                  src={aboutSliderImg2}
                  alt=""
                  className={s.aboutSlider__img}
                />
                <div className="d-flex justify-content-center align-items-center h-100">
                  <p className={s.aboutSlider__title}>
                    מתקדמים ל-ורטו של Nespresso. החלק הכי כיפי ביום העבודה שלך.{' '}
                  </p>
                </div>
              </div>
            </div>
          </AwesomeSlider>
        </div>
      </Container>
    </section>
  );
}

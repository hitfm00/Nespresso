import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import s from './style.module.scss';

export default function PayOff() {
  return (
    <section className={s.payOff}>
      <Container>
        <div className={s.payOff__block}>
          <div className={s.payOff__innerBlock}>
            <h4 className={`title--70 ${s.payOff__title}`}>
              <span>!זה יכול להשתלם לכם</span>
              <span>?עברתם לעבוד מהבית</span>
            </h4>
            <p className={s.payOff__text}>
              הראו לנו את חדר העבודה הביתי שלכם – לפני ואחרי השדרוג המתבקש –
              ואולי תזכו במכונת קפה ורטו של !שתשלים לכם התמונה Nespresso
            </p>
            <NavLink to="/" className="btn__filled">
              {'<< להשתתפות בפעילות'}
            </NavLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

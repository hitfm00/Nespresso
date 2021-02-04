import React from 'react';
import s from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import invalid from '../../assets/img/invalid.svg';
import facebook from '../../assets/img/facebook.svg';
import whatsapp from '../../assets/img/whatsapp.svg';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <img src={logo} alt="logo" className={s.header__logo} />
        <div className={s.header__buttons}>
          <a href="" className={s.header__link}>
            <img src={invalid} alt="invalid" />
          </a>
          <a href="" className={s.header__link}>
            <img src={facebook} alt="facebook" />
          </a>
          <a href="" className={s.header__link}>
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
      </div>
      <div className={s.header__shadow}></div>
    </header>
  );
}

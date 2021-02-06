import React from 'react';
import s from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import whatsapp from '../../assets/img/whatsapp.svg';
import Invalid from '../svg/Invalid';
import Facebook from '../svg/Facebook';
import WhatsApp from '../svg/WhatsApp';
export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <img src={logo} alt="logo" className={s.header__logo} />
        <div className={s.header__buttons}>
          <a href="/" className={s.header__link}>
            <Invalid className={`svg__hover--outline ${s.header__linkImg}`} />
          </a>
          <a href="/" className={s.header__link}>
            <Facebook className={`svg__hover--outline ${s.header__linkImg}`} />
          </a>
          <a href="/" className={s.header__link}>
            <WhatsApp className={`svg__hover--outline ${s.header__linkImg}`} />
          </a>
        </div>
      </div>
      <div className={s.header__shadow}></div>
    </header>
  );
}

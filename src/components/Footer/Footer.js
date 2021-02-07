import React from 'react';
import poweredByImg from '../../assets/img/poweredBy.svg';
import s from './style.module.scss';
export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer__banner}>
        <span className={s.footer__bannerText}>באנר נספרסו</span>
      </div>
      <div className={s.footer__poweredBy}>
        <img
          src={poweredByImg}
          alt="Powered by"
          className={s.footer__poweredByImg}
        />
        <div className={s.footer__textBlock}>
          <span>תנאי שימוש ומדיניות פרטיות</span>
          <span className={s.footer__delimiter}>|</span>
          <span>איפיון ועיצוב</span>
        </div>
      </div>
    </footer>
  );
}

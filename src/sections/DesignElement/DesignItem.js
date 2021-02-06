import React from 'react';
import s from './style.module.scss';

export default function DesignItem(props) {
  const { title, imgUrl } = props;
  return (
    <li className={s.designElement__item}>
      <img src={imgUrl} alt="" className={s.designElement__img} />
      <p className={s.designElement__itemTitle}>{title}</p>
    </li>
  );
}

import React from 'react';
import s from './style.module.scss';

export default function OfficeControlItem(props) {
  const { text, id, img } = props;
  return (
    <li className={s.officeControl__item}>
      <div className={s.officeControl__innerItem}>
        <p className={`${s.officeControl__text} ${s.officeControl__itemText}`}>
          {text}
        </p>
        <span className={s.officeControl__itemId}>{id}</span>
      </div>
      {img ? (
        <img src={img} alt="" className={s.officeControl__img}></img>
      ) : null}
    </li>
  );
}

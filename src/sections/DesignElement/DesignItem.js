import React from 'react';
import { Col } from 'react-bootstrap';
import s from './style.module.scss';

export default function DesignItem(props) {
  const { title, imgUrl } = props;
  return (
    <Col
      md={6}
      lg={4}
      xl={3}
      className="d-flex justify-content-center align-items-center"
    >
      <div className={s.designElement__item}>
        {imgUrl ? (
          <img src={imgUrl} alt="" className={s.designElement__img} />
        ) : null}
        <p className={s.designElement__itemTitle}>{title}</p>
      </div>
    </Col>
  );
}

import React from 'react';
import { Col } from 'react-bootstrap';
import s from './style.module.scss';

export default function DesignItem(props) {
  const { title, imgUrl, backText } = props;
  return (
    <Col
      sm={6}
      md={6}
      lg={4}
      xl={3}
      className="d-flex justify-content-center align-items-center"
    >
      <div className={s.flipCard}>
        <div className={s.flipCard__inner}>
          <div className={s.flipCard__front}>
            {imgUrl ? (
              <img src={imgUrl} alt="" className={s.designElement__img} />
            ) : null}
            <p className={s.designElement__itemTitle}>{title}</p>
          </div>
          <div className={s.flipCard__back}>
            <p>{backText}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}

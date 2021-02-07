import React from 'react';
import s from './style.module.scss';
import photo1 from '../../assets/img/aboutSlider2.png';
import { Col } from 'react-bootstrap';
import Play from '../../components/svg/Play';

export default function PlayListItem() {
  return (
    <Col md={4} xl={4} sm={6} className="d-flex justify-content-center ">
      <div className={s.playList__item}>
        <button className={s.playList__playButton}>
          <Play className={`svg__hover ${s.playList__play}`} />
        </button>
        <img src={photo1} alt="" className={s.playList__img} />
      </div>
    </Col>
  );
}

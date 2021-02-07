import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import s from './style.module.scss';

export default function WithLink(props) {
  const { title, text, linkTo, idForScroll } = props;
  return (
    <ScrollableAnchor id={idForScroll}>
      <section className={s.withLink}>
        <Container className="d-flex justify-content-center align-items-center">
          <div className={s.withLink__textBlock}>
            <h1 className={`title--80`}>{title}</h1>
            <p className={s.withLink__text}>{text}</p>
            <NavLink
              className={`btn__outline ${s.withLink__button}`}
              to={linkTo}
            >
              {'<< לכתבה מלאה'}
            </NavLink>
          </div>
        </Container>
      </section>
    </ScrollableAnchor>
  );
}

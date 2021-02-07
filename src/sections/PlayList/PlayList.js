import React from 'react';
import { Container, Row } from 'react-bootstrap';
import s from './style.module.scss';
import PlayListItem from './PlayListItem';

export default function PlayList() {
  return (
    <section class={`py-5 py-md-0 ${s.playList}`}>
      <Container className="h-100">
        <div className={s.playList__wrapper}>
          <div className={s.playList__textBlock}>
            <h4 className={`title--70 ${s.playList__title}`}>
              בנינו עבורכם את הפלייליסט האולטימטיבי למשרד הביתי
            </h4>
            <p className={s.playList__text}>
              לכל הרגעים הכי מאתגרים במהלך העבודה מהבית. כי רק קפה טוב זה לא
              תמיד מספיק
            </p>
          </div>
          <Row md="12" className={s.playList__list}>
            <PlayListItem />
            <PlayListItem />
            <PlayListItem />
          </Row>
        </div>
      </Container>
    </section>
  );
}

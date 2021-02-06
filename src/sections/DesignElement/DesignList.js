import React from 'react';
import DesignItem from './DesignItem';
import s from './style.module.scss';
import designElement1 from '../../assets/img/designElement1.png';
import designElement2 from '../../assets/img/designElement2.png';
import designElement3 from '../../assets/img/designElement3.png';
import designElement4 from '../../assets/img/designElement4.png';
import designElement5 from '../../assets/img/designElement5.png';

export default function DesignList() {
  return (
    <ul className={s.designElement__list}>
      <DesignItem title={'תעודת הוקרה ממוסגרת'} imgUrl={designElement1} />
      <DesignItem title={'תעודת הוקרה ממוסגרת'} imgUrl={designElement2} />
      <DesignItem title={'תעודת הוקרה ממוסגרת'} imgUrl={designElement3} />
      <DesignItem
        title={
          'שקיימת אצלך התמכרות לא מסוכנת לסימונים בעיגול של תאריכים חשובים, וגם שהמקיף על המכונית המשפחתית בחניה תיכף מסתיים'
        }
      />
      <DesignItem title={'תעודת הוקרה ממוסגרת'} imgUrl={designElement5} />
      <DesignItem title={'תעודת הוקרה ממוסגרת'} imgUrl={designElement4} />
      <DesignItem title={'תעודת הוקרה ממוסגרת'} imgUrl={designElement4} />
      <DesignItem title={'תעודת הוקרה ממוסגרת'} imgUrl={designElement4} />
    </ul>
  );
}

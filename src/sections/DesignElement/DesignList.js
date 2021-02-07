import React from 'react';
import DesignItem from './DesignItem';
import designElement1 from '../../assets/img/designElement1.png';
import designElement2 from '../../assets/img/designElement2.png';
import designElement3 from '../../assets/img/designElement3.png';
import designElement4 from '../../assets/img/designElement4.png';
import designElement5 from '../../assets/img/designElement5.png';
import designElement7 from '../../assets/img/designElement7.png';
import { Row } from 'react-bootstrap';

export default function DesignList() {
  return (
    <Row md={'12'}>
      <DesignItem
        title={'תעודת הוקרה ממוסגרת'}
        backText="הי, מרחוק אפשר לטעות ולחשוב שסיימת רפואה בהצטיינות"
        imgUrl={designElement1}
      />
      <DesignItem
        title={'גיטרה עומדת'}
        backText="אנחנו כבר יודעים מי יהיה מסמר הערב בגיבוש הצוות הבא אחרי הקורונה"
        imgUrl={designElement2}
      />
      <DesignItem
        title={'רקע של הגולדן גייט בסן פרנסיסקו בזום'}
        backText="שהשארת בדירה את הטפט של זוג הקשישים שגר כאן לפניך, ואין מצב לחשוף את זה עכשיו "
        imgUrl={designElement3}
      />
      <DesignItem
        title={'לוח שנה של סוכנות ביטוח על הקיר שמאחורייך'}
        backText="שקיימת אצלך התמכרות לא מסוכנת לסימונים בעיגול של תאריכים חשובים, וגם שהמקיף על המכונית המשפחתית בחניה תיכף מסתיים"
        imgUrl={designElement7}
      />
      <DesignItem
        title={'ורטו של נספרסו'}
        imgUrl={designElement5}
        backText="שמבחינתך לוותר על השיחות בפינת הקפה זה עוד בסדר, אבל לפחות הקפה עצמו השתפר דרמטית"
      />
      <DesignItem
        title={'מדפסת משולבת פקס'}
        backText="אם רק מחלקת משאבי אנוש תרצה, אין מניעה להחזיר אותך ל-2002"
        imgUrl={designElement4}
      />
      <DesignItem
        title={'הליכון '}
        backText="למשך כמה דקות דמיינת את עצמך עושה על זה 7 קילומטר כל בוקר, ועכשיו יש לך קולב דקורטיבי לבגדים שלך"
        imgUrl={designElement4}
      />
      <DesignItem
        title={'דיוקן קריקטורה מוגזם שלך'}
        backText="כמו כולנו, היית בטיילת של אילת בניינטיז"
        imgUrl={designElement4}
      />
    </Row>
  );
}

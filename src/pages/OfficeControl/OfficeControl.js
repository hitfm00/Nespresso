import React from 'react';
import { Row, Col } from 'react-bootstrap';
import photo1 from '../../assets/img/officeControl-1.png';
import photo2 from '../../assets/img/officeControl-2.png';
import photo3 from '../../assets/img/officeControl-3.png';
import CloseIcon from '../../components/svg/CloseIcon';
import List from './OfficeControlList';
import s from './style.module.scss';

export default function OfficeControl() {
  return (
    <section className={s.officeControl}>
      <div className={s.officeControl__main}>
        <h1 className={`title--70 ${s.officeControl__title}`}>שליטה באופיס</h1>
        <p className={s.officeControl__subtitle}>
          קבלו טיפים של מעצבות פנים לחדר העבודה הביתי שלכם. לא, כי הלפטופ עליכם
          עם הפוך בסלון לא יעבוד לאורך זמן
        </p>
        <img
          src={photo1}
          alt="photo"
          className={`${s.officeControl__img} ${s.officeControl__imgFirst}`}
        />
        <span className={s.officeControl__text}>
          זה לא יהיה מוגזם מדי להניח שאחד החיפושים הפופולריים יותר בגוגל בשנה
          האחרונה, עסק בסוגיות השונות של 'עבודה מהבית'. טוב, לא ברמת הפופולריות
          של החיפוש 'קורונה – תסמינים', אבל הבנתם את הראש. ככה זה כשאחוז ניכר כל
          כך משוק העבודה שהיכרנו, יצא בסוף הרבעון הראשון של 2020 מהמשרדים
          התעשייתיים אל הדירות הפרטיות. פתאום מה שהיה כניסה חד פעמית לתיבת המייל
          לחמש דקות גג כשאתם מרוחים מול הנטפליקס בערב, הפך ליום עבודה מלא שצריך
          להתקיים במרחק זריקת עוגייה מהמטבח שלכם, מה שמיד הוליד צורך חדש ואמיתי:
          לארגן לעצמכם סביבת עבודה בחלל הבית, כי לכו תדעו מתי למגיפה הזאת יימאס
          מאיתנו. חוץ מזה, אולי בכלל אף פעם לא נחזור לפורמט המשרדי הישן, ועבודה
          מהבית תהפוך עבור רבים מאיתנו לחלק אינטגרלי מהדברים שאנחנו עושים בשביל
          פרנסה. אז זהו, שאם כבר אנחנו שם, כדאי לעשות את זה כמו שצריך. או לפחות
          לדבר עם מומחים שיסבירו לנו איך ולמה. מה שכן, מטבע הדברים המשרד הביתי
          שלנו מושפע קודם כל מתצורת וגודל הבית שבו אנחנו חיים. אי אפשר להשוות
          בין האופציות העומדות בפני מי שחולק דירת 3 חדרים עם שותף, לבין מי
          שביומיום פועל מבית פרטי במושב עם מספיק חדרים כדי להלין גם את המשפחה של
          השכנה. כמה כללי אצבע שהצלחנו להוציא ממעצבות הפנים תמר רוזן נעים, נטלי
          גדליה ויהודית גולדפרב
        </span>

        <Row className="mb-3">
          <Col>
            <div>
              <img
                src={photo2}
                alt="Photo 2"
                className={`${s.officeControl__img} ${s.officeControl__imgSecond}`}
              />
              <p className={s.officeControl__textUnderPhoto}>
                נטלי גדליה ויהודית גולדפרב // צילום: יסמין ברדה
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <img
                src={photo3}
                alt="Photo 3"
                className={`${s.officeControl__img} ${s.officeControl__imgSecond}`}
              />
              <p className={s.officeControl__textUnderPhoto}>
                תמר רוזן נעים // צילום: טל ברושל
              </p>
            </div>
          </Col>
        </Row>

        <List />
        <span className={s.officeControl__text}>
          לא צריך להיות קורא בקפה כדי לדעת שהמכונות של Nespresso הן מזמן חלק
          אינטגרלי משגרת היום של אוהבי קפה בכל רחבי העולם. ככה זה כשבמיליוני
          משרדים וחללי עבודה מסביב לגלובוס מקפידים להציב גם מכונת קפה איכותית
          כדי לאותת לעובדים שהם חפצים ביקרם. אבל המציאות ששלחה כל כך הרבה מאיתנו
          לקיים מהבית גם את החלק של העבודה, הציפה צורך חדש: הנאה מקפה איכותי
          בצורה פשוטה ויעילה, גם כשהמשרד והבית נמצאים באותה כתובת. ונדמה שאין
          מתאימה ממכונת ה-VERTUO כדי לענות על הצורך הזה. זה מתחיל ממידותיה
          החטובות שמאפשרות להציב אותה גם ב"פינות קפה" קטנות יחסית (או מאולתרות),
          כמו שרבים מאיתנו נאלצו לסדר לאחרונה. זה ממשיך עם הטכנולוגיה החדשנית
          והייחודית שלה, שמציעה לא פחות מחמישה סגנונות קפה בגדלים שונים, כדי
          לגוון ולהעשיר לכם את יום העבודה גם כשאתם היחידים ב"משרד". אפשר לזגזג
          בין ספל אספרסו רגיל (40 מ"ל) לאספרסו כפול (80 מ"ל), להתלבט בין 'גראן
          לונגו' (150 מ"ל) או 'מאג' (230 מ"ל), או להתפנק עד הסוף עם 'אלטו' (414
          מ"ל). קפסולות הקפה של VERTUO זורמות מעולה הן עם חלב קר והן עם חלב
          מוקצף, מספקות קרמה עשירה וקטיפתית, וכרגיל – מתעוררות לחיים בלחיצת
          כפתור אחת ויחידה. במילים אחרות, תעשו מקום במשרד הביתי שלכם גם ל-VERTUO
          של Nespresso.
        </span>
        <div className={s.officeControl__footer}>
          <span>לסגור</span>
          <button>
            <CloseIcon className="svg__hover--outline" />
          </button>
        </div>
      </div>
    </section>
  );
}

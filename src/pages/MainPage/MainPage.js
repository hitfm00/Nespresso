import React from 'react';
import FromHomeToWork from '../../sections/FromHomeToWork/FromHomeToWork';
import PayOff from '../../sections/PayOff/PayOff';
import PlayList from '../../sections/PlayList/PlayList';
import FilmSection from '../../sections/FilmSection/FilmSection';
import WithLink from '../../sections/WithLink/WithLink';
import DesignElement from '../../sections/DesignElement/DesignElement';
import AboutSlider from '../../sections/AboutSlider/AboutSlider';
import Footer from '../../components/Footer/Footer';

export default function MainPage() {
  return (
    <main className="main">
      <FromHomeToWork />
      <div className="wrapper">
        <WithLink
          title="שליטה באופיס"
          text="קבלו טיפים של מעצבות פנים לחדר העבודה הביתי שלכם. לא, כי הלפטופ עליכם עם הפוך בסלון לא יעבוד לאורך זמן"
          linkTo="/office_control"
          idForScroll="withLink"
        />
        <PayOff />
        <PlayList />
        <FilmSection
          title="כותרת לסרט 1 בשתי שורות ארוכות"
          className="filmSection--1"
        />
        <WithLink
          title="חדר משחקים"
          text="מי אמר שעבודה מהבית צריכה למנוע ממך את כל הפינוקים הקטנים של יום העבודה. הנה 10 מוצרים שישדרגו לך משמעותית את המשרד הביתי"
          linkTo="/office_control"
        />
        <FilmSection
          title="כותרת לסרט 2 בשתי שורות ארוכות"
          className="filmSection--2"
        />
        <DesignElement />
        <WithLink
          title="‏5 רגעי קפה שאתם
.חייבים לחוות במשרד
 או בבית. רגע, בעצם
זה אותו דבר"
          linkTo="/office_control"
        />
        <FilmSection
          title="כותרת לסרט 2 בשתי שורות ארוכות"
          className="filmSection--3"
        />
        <AboutSlider />

        <Footer />
      </div>
    </main>
  );
}

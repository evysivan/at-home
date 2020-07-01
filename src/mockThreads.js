import React from "react";
import threadImage from "./assets/threadImage.jpeg";
import pdf from "./assets/file types/pdf.png";
import jpg from "./assets/file types/jpg.png";
import powerpoint from "./assets/file types/powerpoint.png";
import xls from "./assets/file types/xls.png";
import txt from "./assets/file types/txt.png";
import link from "./assets/file types/link.png";

const mock = [
  {
    id: 1,
    room: { title: "104003 - חדו״א 1", roomId: 1 },
    votes: 20,
    thumbnail: pdf,
    details: {
      by: "TGIF1996",
      time: 4,
      title: "...לא בטוח שהבנתי את ההוכחה של גבול",
      body:
        "הסבירו לנו בהרצאה היום על הוכחת הגבול, אבל לא ממש הבנתי מה אני אמור להוכיח ומה הקטע עם האפסילון והדלתא. יש מצב לעזרה?",
    },
  },
  {
    id: 2,
    room: { title: "096411 - למידה חישובית 1", roomId: 2 },
    votes: 30,
    thumbnail: jpg,
    details: {
      by: "SixColors1984",
      time: 15,
      title: "פורום שאלות-תשובות לתרגיל בית 1 - הגשה ב-14.5.2020",
      body:
        "היי כולם, מוזמנים לשאול כאן שאלות ולהגיב תשובות, הצעות לעזרה וכל תוכן מועיל לגבי תרגיל בית 1. מזכירה לכולם את חוקי החדר. הגשה מוצלחת לכולם 😊",
    },
  },
  {
    id: 3,
    room: { title: "למידת מכונה - ML", roomId: 3 },
    votes: 10,
    thumbnail: powerpoint,
    details: {
      by: "Tsahi-Cohen",
      time: 12,
      title: "המלצה על מודלים לזיהוי כלבים בתמונות?",
      body:
        "מחפש מודלים לזיהוי כלבים בתמונות, ספציפית פודלים. חיפשתי קצת בגוגל ולא מצאתי משהו ספציפי. אני עובד על איזה פרויקט בעבודה ולרוב העובדים יש כלבים (לבוסית יש פודל…). תודה!",
    },
  },
  {
    id: 4,
    room: { title: "234111 - מבוא למדעי המחשב", roomId: 4 },
    votes: 25,
    thumbnail: xls,
    details: {
      by: "PM_Me_Potatoes",
      time: 5,
      title: "מדריך להתקנת CodeBlocks",
      body:
        "היי כולם, למי שקצת הסתבך ואולי לא הצליח להתקין כמו שצריך כתבתי מדריך יותר נוח איך להתקין CodeBlocks ואיך מתמודדים עם שגיאות התקנה וכו׳. בהצלחה! קובץ מצורף.",
    },
  },
  {
    id: 5,
    room: { title: "095140 - תכנון פרויקטים וניהולם", roomId: 5 },
    votes: 20,
    thumbnail: pdf,
    details: {
      by: "HelenOfTROY",
      time: 2,
      title: "דף נוסחאות מוקלד",
      body: "מצרפת דף נוסחאות מוקלד, תודה ל-KittyKat על העזרה!",
      image: threadImage,
    },
  },
  {
    id: 6,
    room: { title: "095140 - תכנון פרויקטים וניהולם", roomId: 5 },
    votes: 150,
    thumbnail: xls,
    details: {
      by: "someGuy",
      time: 1,
      title: "תרגיל בית 5",
      body: "מחפש פתרון לתרגיל בית 5",
    },
  },
  {
    id: 7,
    room: { title: "104166 - אלגברה א׳", roomId: 6 },
    votes: 5,
    thumbnail: pdf,
    details: {
      by: "TaliB_1993",
      time: 1,
      title: "סיכום - מספרים מרוכבים",
      body:
        "מחפש פתרון לתרגיל בית היי כולם, בהמשך להרצאה 3, הנה הסיכום שלי מההרצאה באלגברה על מספרים מרוכבים. בהצלחה! :)",
    },
  },
  {
    id: 8,
    room: { title: "104166 - אלגברה א׳", roomId: 6 },
    votes: 1,
    thumbnail: jpg,
    details: {
      by: "BadMan_K",
      time: 1,
      title: "מישהו שמבין בדטרמיננטות?",
      body:
        "בתרגיל בית 8 נתנו איזו דטרמיננטה פסיכית בשאלה 4. מצרף את מה שעשיתי. יש למישהו הסבר ויכול לעזור לי?",
    },
  },
  {
    id: 9,
    room: { title: "104166 - אלגברה א׳", roomId: 6 },
    votes: 2,
    thumbnail: txt,
    details: {
      by: "NaamaBI",
      time: 1,
      title: "איך אתם מוודאים דירוג מטריצות?",
      body: "",
    },
  },
  {
    id: 10,
    room: { title: "106725 - אלגברה מולטילינארי", roomId: 7 },
    votes: 6,
    thumbnail: link,
    details: {
      by: "peoplePopper",
      time: 1,
      title: "סרטון שמסביר ממש טוב מכפלות טנזוריות",
      body: (
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          https://www.youtube.com/watch?v=dQw4w9WgXcQ
        </a>
      ),
    },
  },
  {
    id: 11,
    room: { title: "106725 - אלגברה מולטילינארי", roomId: 7 },
    votes: 0,
    thumbnail: txt,
    details: {
      by: "M0un1r90",
      time: 1,
      title: "מחפש שותף/ה תותח בטנזורים לתרגיל בית 3",
      body:
        "אהלן, כמו שכתוב בכותרת - התרגיל להגשה עוד שבוע והשותף שלי החליט לפרוש מהקורס. יש מישהו/י פנוי/ה?",
    },
  },
  {
    id: 11,
    room: { title: "104134 - אלגברה מודרנית ח", roomId: 8 },
    votes: 0,
    thumbnail: txt,
    details: {
      by: "AviTBanana",
      time: 1,
      title: "למה לגראנז׳ של אלגברה לא כמו לגראנז׳ של אינפי?",
      body:
        "אני זוכר שבאינפי הוכחנו את לגראנז׳ אחרת, למה ההוכחה באלגברה לא אותו דבר? למה צריך הוכחה אחרת?",
    },
  },
  {
    id: 12,
    room: { title: "104134 - אלגברה מודרנית ח", roomId: 8 },
    votes: 4,
    thumbnail: pdf,
    details: {
      by: "LaianHafif21",
      time: 1,
      title: "מצאתי PDF של ספר אלגברה באנגלית עם חומר שמתאים לקורס",
      body: "מקווה שזה יעזור למישהו :)",
    },
  },
];

export default mock;

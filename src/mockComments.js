const mock = [
  {
    id: 1,
    threadId: 1,
    user: "Blabla",
    indent: false,
    comment: "יש לך אחלה הרצאות של צנזור",
  },
  {
    id: 2,
    threadId: 7,
    indent: false,
    user: "BeansOnToast",
    comment: "תודה רבה! אפשר אולי לסרוק מחדש את עמוד 2? הוא יצא קצת מטושטש",
  },
  {
    id: 3,
    indent: true,
    threadId: 7,
    user: "TaliB_1993",
    comment: "אופס! בטח. תוקן. תודה!",
  },
  {
    id: 4,
    threadId: 7,
    indent: false,
    user: "nad3rS",
    comment: "טוב שהיית למה פיספסתי את ההרצאה… תודה!",
  },
  {
    id: 5,
    threadId: 7,
    user: "LHBB_KFC",
    indent: false,
    comment: "אחלה סיכום. אפשר הסבר קצת על מה זה אומר מספר צמוד?",
  },
  {
    id: 6,
    threadId: 7,
    user: "Mathematan",
    indent: true,
    comment:
      "זה פשוט במקום לעשות חיבור בין החלק הממשי לחלק המדומה, עושים הפרש.",
  },
  {
    id: 7,
    threadId: 7,
    user: "LHBB_KFC",
    indent: true,
    comment: "הבנתי את זה אבל מה זה אומר מתמטית?",
  },
  {
    id: 8,
    threadId: 7,
    user: "Mathmatan",
    indent: true,
    comment:
      "להסביר מה זה אומר זה קצת מתקדם מדי לקורס הזה, אתה תלמד על זה אולי באלגברה יותר מתקדם, אבל משתמשים בזה לכל מיני דברים כמו חישוב של נורמה מרוכבת. מתמטית זה כולה מספר שייש לו אותו מרחק מראשית הצירים הממשי והמדומה, אבל בכיוון השלילי של המדומה.",
  },
  {
    id: 9,
    threadId: 2,
    user: "LHBB_KFC",
    indent: true,
    comment: "אחלה, תודה :)",
  },
  {
    id: 10,
    threadId: 8,
    user: "KerryME",
    indent: false,
    comment: "איפה אתה מסתבך?",
  },
  {
    id: 11,
    threadId: 8,
    user: "BadMan_K",
    indent: true,
    comment:
      "אני לא בטוח אם התוצאה שיצאה לי בסוף נכונה, ואני לא סגור לגבי הדרך שלי. הצלחת לפתור את זה?",
  },
  {
    id: 12,
    threadId: 8,
    user: "KerryME",
    indent: true,
    comment:
      "כן, שים לב שאתה יכול לבחור בשורה אחרת כדי לחשב וזה יחסוך לך איזה 4 צעדים אבל התוצאה הסופית שלנו זהה.",
  },
  {
    id: 13,
    threadId: 8,
    user: "BadMan_K",
    indent: true,
    comment: "נו באמת! שעה לקח לי… לפחות התוצאה נכונה. תודה!",
  },
  {
    id: 13,
    threadId: 8,
    user: "TheLearningMachine",
    indent: false,
    comment: "יצא לך סבבה למה אתה מסתבך?",
  },
  {
    id: 14,
    threadId: 9,
    user: "TaliB_1993",
    indent: false,
    comment: "אני בדרך כלל משווה עם אנשים לראות שעשינו נכון",
  },
  {
    id: 15,
    threadId: 9,
    user: "OneyCartoons",
    indent: false,
    comment:
      "את יכולה להשתמש במחשבון דירוג מטריצות, יש מלא בגוגל. אני אישית עובד עם זה: https://matrix.reshish.com/gauss-jordanElimination.php כי אפשר לעשות מלא גדלים.אני בדרך כלל משווה עם אנשים לראות שעשינו נכון",
  },
  {
    id: 16,
    threadId: 9,
    user: "NaamaBI",
    indent: true,
    comment: "חח לא חשבתי לחפש בגוגל :D תודה רבה!",
  },
  {
    id: 17,
    threadId: 10,
    user: "Legomass",
    indent: false,
    comment: "תודה! המבטא שלו מעצבן אבל זה יותר מובן עכשיו",
  },
  {
    id: 18,
    threadId: 10,
    user: "SmartyShirt17",
    indent: false,
    comment: "איך תמיד זה הודים? תודה",
  },
  {
    id: 19,
    threadId: 10,
    user: "PaulinaE",
    indent: false,
    comment:
      "זה לא 100% מה שהיה בהרצאה כי אין את ההסברים להוכחות שהראו בכיתה… :/",
  },
  {
    id: 20,
    threadId: 10,
    user: "peoplePopper",
    indent: true,
    comment: "מה חסר לך?",
  },
  {
    id: 21,
    threadId: 10,
    user: "PaulinaE",
    indent: true,
    comment: "שלחתי לך בפרטי",
  },
  {
    id: 22,
    threadId: 11,
    user: "TeamRockIt",
    indent: false,
    comment: "כי זה לא אותו משפט. זה אותו מתמטיקאי, אבל משפט אחר.",
  },
  {
    id: 23,
    threadId: 11,
    user: "KerryME",
    indent: false,
    comment: "זה פשוט משפט אחר, באינפי זה על פונקציות ובאלגברה זה על חברות.",
  },
  {
    id: 24,
    threadId: 12,
    user: "TeamRockIt",
    indent: false,
    comment: "תודה רבה! :)",
  },
  {
    id: 25,
    threadId: 12,
    user: "D0ct0rWh0",
    indent: false,
    comment: "באסה שבאנגלית, אבל עדיף על כלום. תודה!!!",
  },
  {
    id: 26,
    threadId: 12,
    user: "happyhippo",
    indent: true,
    comment: "חחח תגיד תודה שלא בצרפתית",
  },
  {
    id: 27,
    threadId: 12,
    user: "D0ct0rWh0",
    indent: true,
    comment: "למה צרפתית?",
  },
  {
    id: 28,
    threadId: 12,
    user: "happyhippo",
    indent: true,
    comment: "לגראנז׳ היה צרפתי חח",
  },
  {
    id: 29,
    threadId: 12,
    user: "mus1cMan",
    indent: false,
    comment: "יש מהדורה יותר חדשה לדעתי",
  },
  {
    id: 30,
    threadId: 12,
    user: "LaianHafif21",
    indent: true,
    comment: "לא ראיתי, אבל יש פה כמעט הכל תאכלס",
  },
  {
    id: 31,
    threadId: 12,
    user: "mus1cMan",
    indent: false,
    comment:
      "כן פשוט בחדשה יותר יש סימונים עם הערות שאין במהדורה הזו. אולי מישהו ימצא ויעלה. בכל מקרה תודה!",
  },
];

export default mock;

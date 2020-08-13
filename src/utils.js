import moment from "moment";

export const timeDiffToday = (date) => {
  const today = moment(new Date());
  const momentDate = moment(date);
  const days = today.diff(momentDate, "days");

  if (days < 1) return `${today.diff(momentDate, "hours")} hours ago`;
  else if (days > 1 && days < 30)
    return `${today.diff(momentDate, "days")} days ago`;
  else if (days > 30 && days < 365)
    return `${today.diff(momentDate, "months")} months ago`;
  else return `${today.diff(momentDate, "years")} years ago`;
};

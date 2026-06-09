export function dateTimeToDate(dateTime) {
  var dateTime = new Date(dateTime);

  var twoDigitMonth = dateTime.getMonth() + "";
  if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;

  var twoDigitDate = dateTime.getDate() + "";
  if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;

  var dateFormated =
    twoDigitDate + "/" + twoDigitMonth + "/" + dateTime.getFullYear();

  return dateFormated;
}

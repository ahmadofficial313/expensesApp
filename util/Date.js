 function getFormatDate(date){
    return `${date.getFullYear()}-${date.getMonth()+ 1}-${date.getDate()}`;
}
export default getFormatDate

export function getDateMinusDays  (date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
  };
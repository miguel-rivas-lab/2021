export default () => {
  dateToNumber: (date: string) => {
    return parseInt(date.split("/").join(""));
  }
}
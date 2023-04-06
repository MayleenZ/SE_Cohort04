// console.log(module);

//similar to export default
// module.exports = "perscholas"

//similar to export (exports an object with key value pairs)
module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

module.exports.getWeekday = function(dayNo) {
    if (dayNo < 0 || dayNo > 6) dayNo = 0;
    //the if statement makes sure that the dayNo argument is within the correct index of weekdays
    return this.weekdays[dayNo]
}
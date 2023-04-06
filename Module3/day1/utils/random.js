
//declared the function
module.exports = function random(num1,num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1)
};
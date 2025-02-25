const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || (num1 % 1 !== 0) || (num2 % 1 !== 0) || (typeof num1 !== "number") 
        || (typeof num2 !== "number")) {
        return "ERROR";
    }
    let sum = 0;
    let bigNum = 0;
    let smallNum = 0;
    if (num1 > num2 || num1 === num2) {
        bigNum = num1;
        smallNum = num2;
    } else {
        bigNum = num2;
        smallNum = num1;
    }
    for (i = smallNum; i < bigNum + 1; i++) {
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;

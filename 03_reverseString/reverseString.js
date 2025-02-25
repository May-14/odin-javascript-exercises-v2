const reverseString = function(string) {
    let arrayFromString = string.split("");
    let reversedArray = [];
    for (item of arrayFromString) {
        reversedArray.unshift(item);
    }
    let reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

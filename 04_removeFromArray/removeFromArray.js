const removeFromArray = function(array, ...theArgs) {
    for (arg of theArgs) {
        while (array.includes(arg)) {
            array.splice(array.indexOf(arg), 1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

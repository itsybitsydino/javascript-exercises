const reverseString = function(string) {
    return string.split('')
                .sort((a,b) => -1) // you can actually just use string.reverse()
                .join('');
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;

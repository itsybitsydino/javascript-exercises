const repeatString = function(word, noOfRepeats) {
    let phrase = '';

    if (noOfRepeats < 0) { 
        return 'ERROR';
    }
    for (let i = 0; i < noOfRepeats; i++) {
        phrase += word;
    } 
    return phrase;
};


repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;

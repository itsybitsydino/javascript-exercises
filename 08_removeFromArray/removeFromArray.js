// short version
const removeFromArray = function(arr, ...valuesToRemove) {
    const filteredArray = arr.filter(value => (!valuesToRemove.includes(value)));
    return filteredArray;
} 


// long version
/* const removeFromArray = function(arr, ...valuesToRemove) {
    const filteredArray = arr.filter(function a(value) {
        if (!valuesToRemove.includes(value)) {
            return true;
        }
    });
    console.log(valuesToRemove);
    return filteredArray;
};
 */

// Do not edit below this line
module.exports = removeFromArray;

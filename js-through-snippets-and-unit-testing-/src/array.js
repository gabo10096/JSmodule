const allEqual = arr => arr.every(val => val === arr[0]);
/*const countOccurrences = (array, num) => {
    let occ = 0;
    
    array.forEach(element => {
        if (element === num) {
            occ++;
        }
    });

    return occ;
}*/
const countOccurrences = (arr, val) => arr.reduce((a,v) => (v === val ? a+1 : a), 0);

module.exports = { allEqual,countOccurrences }
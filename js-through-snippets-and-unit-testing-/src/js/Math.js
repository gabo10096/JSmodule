const isEven = num => (num % 2) === 0 ? true : false;
const average = (...arr) =>{
    let sum;
    arr.forEach(element => {
        sum = arr.reduce((previus, current) => current += previus);
    });
    return sum/arr.length;
}
const isDivisible = (num1, num2) =>  num1 % num2 === 0 ? true : false;
const degreeesToRads = deg => (deg * Math.PI)/180.0;

module.exports = {isEven,average,isDivisible,degreeesToRads}
let arr = [25, 66, 47, 99, 31, 46, 55, 74, 125, 321, 274];
function getEvenOdd(numbers) {
    let even = [];
    let odd = [];
    for (const number of numbers) {
        if (number % 2 == 0) {
            even.push(number);
        } else {
            odd.push(number);
        }
    }
    return {
        even,
        odd,
    };
}
const evenNumber = getEvenOdd(arr).even;
const oddNumber = getEvenOdd(arr).odd;
const evenOdd = getEvenOdd(arr);
// console.log(evenNumber);
console.log(evenOdd);

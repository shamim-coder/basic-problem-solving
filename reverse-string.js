// way 01 reverse a string without using in-built methods
function reverseString(str) {
    let newString = "";
    for (i = 0; i < str.length; i++) {
        newString = str[i] + newString;
    }
    return newString;
}
let getReverse = reverseString("hello my name is shamim");
// console.log(getReverse);

// way 02 reverse a string With a Decrementing For Loop
function reverseString2(str) {
    let newString = "";
    for (i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
let getReverse2 = reverseString2("How to Understand Recursion in JavaScript");
// console.log(getReverse2);

// way 03 - reverse a string With Built-In Functions

const reverseString3 = (str) => str.split("").reverse().join("");

// console.log(reverseString3("hello"));

// way 04 - reverse a string with recursion.

console.log(Math.PI * Math.pow(2.6, 2));

//
/* function vowelsAndConsonants(s) {
    for (let i = 0; i < s.length; i++) {
        if (
            s[i] == "a" ||
            s[i] == "e" ||
            s[i] == "i" ||
            s[i] == "o" ||
            s[i] == "u"
        ) {
            console.log(s[i]);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (
            s[i] != "a" &&
            s[i] != "e" &&
            s[i] != "i" &&
            s[i] != "o" &&
            s[i] != "u"
        ) {
            console.log(s[i]);
        }
    }
}

vowelsAndConsonants("javascriptloops");
 */
let arr = [25, 36, 46, 11, 38, 99, 99, 48];
function getSecondLargest(nums) {
    let largestNumber = nums[0];
    let secondLargest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (largestNumber < nums[i]) {
            secondLargest = largestNumber;
            largestNumber = nums[i];
        } else if (nums[i] > secondLargest && largestNumber != nums[i]) {
            secondLargest = nums[i];
        }
    }
    console.log(secondLargest);
}
getSecondLargest(arr);

let object = [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 },
];
let count = 0;
// console.log(object[0]);

console.log(Object.keys(object));

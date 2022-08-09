/*
Goals: return 'n' copies of given string;
Params: String1: str, String2: newStr, Number1: i;
Return Val: String;
Logic: return str, repeated 'n' times

Given a string and a non-negative int n, return a larger string that is n copies of the original string.

stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
*/

const stringTimes = (str, i) => str.repeat(i);


console.log(stringTimes("Hi", 2));
console.log(stringTimes("Hi", 3));
console.log(stringTimes("Hi", 1));

/*
Goals: return a given number copies of a given string's first 3 chars;
Params: String1: str, Number1: i;
Return Val: String;
Logic: if str length < 3, return 'i' copies of str. otherwise return 'i' copies of str's first 3 chars

Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;

frontTimes("Chocolate", 2) → "ChoCho"
frontTimes("Chocolate", 3) → "ChoChoCho"
frontTimes("Abc", 3) → "AbcAbcAbc"
*/

const frontTimes = (str, i) => str.length < 3 ? str.substring(0).repeat(i)
    : str.substr(0, 3).repeat(i);

console.log(frontTimes("Chocolate", 2));
console.log(frontTimes("Chocolate", 3));
console.log(frontTimes("Abc", 3));
console.log(frontTimes("Ab", 3));

/*
Goals: count and return total number of "xx" occurances in given string;
Params: String1: str, Number1: count, Number2: i;
Return Val: Number;
Logic: create a variable named count
using a for loop, check 'str' for "xx" moving one char at a time.
if str.substr(i, 2), add one to 'count'
}return 'count';

Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".

countXX("abcxx") → 1
countXX("xxx") → 2
countXX("xxxx") → 3
*/
const countXX = str => {
    let count = 0;
    for (i = 0; i < str.length - 1; i++) {
        if (str.substr(i, 2) === "xx") {
            count++;
        }
    } return count;
}

console.log(countXX("abcxx"));
console.log(countXX("xxx"));
console.log(countXX("xxxx"));
/*
Goals: 
Params: 
Return Val: 
Logic: 
*/


/*
Goals: 
Params: 
Return Val: 
Logic: 
*/


/*
Goals: 
Params: 
Return Val: 
Logic: 
*/


/*
Goals: 
Params: 
Return Val: 
Logic: 
*/


/*
Goals: 
Params: 
Return Val: 
Logic: 
*/


/*
Goals: 
Params: 
Return Val: 
Logic: 
*/


/*
Goals: 
Params: 
Return Val: 
Logic: 
*/


/*
Goals: 
Params: 
Return Val: 
Logic: 
*/


/*
Goals: 
Params: 
Return Val: 
Logic: 
*/


/*
Goals: 
Params: 
Return Val: 
Logic: 
*/
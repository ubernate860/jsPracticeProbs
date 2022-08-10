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
Goals: return true if first 'x' in given string is followed by another 'x';
Params: String1: str, Number1: i;
Return Val: Boolean;
Logic: loop through 'str' and if first instance of 'x' is the same index as
first instance of 'xx', return true. otherwise return false;

Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".


doubleX("axxbb") → true
doubleX("axaxax") → false
doubleX("xxxxx") → true
*/
const doubleX = str => {
    for (i = 0; i < str.length - 1; i++) {
        if (str.indexOf('x') === str.indexOf('xx')) {
            return true;
        }
    } return false;
}

console.log(doubleX("axxbb"));
console.log(doubleX("axaxax"));
console.log(doubleX("xxxxx"));
/*
Goals: return every other char of a given string, beginning with the first;
Params: String1: str, String2: str2, Number1: i;
Return Val: String;
Logic: Create empty string 'str2'
using a for loop, if 'i' < str.length, add 2 to 'i' and add str[i] to str2

Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

stringBits("Hello") → "Hlo"
stringBits("Hi") → "H"
stringBits("Heeololeo") → "Hello"
*/
const stringBits = str => {
    let str2 = "";
    for (i = 0; i < str.length; i+= 2) {
        str2 = str2 + str[i];
    }
    return str2;
}

console.log(stringBits("Hello"));
console.log(stringBits("Hi"));
console.log(stringBits("Heeololeo"));
/*
Goals: return a given string's first char, then first two chars and so on
until reaching given string in length, then return all as a new string;
Params: String1: str, String2: str2, Number1: i, Number2: j;
Return Val: String;
Logic: Create empty string 'str2' and 'j' as 0, then loop through 'str' 
adding a substr(i, j) to 'str2', adding one to j as long as 'j' <= str.length...
return 'str2' + 'str';

Given a non-empty string like "Code" return a string like "CCoCodCode".

stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"
*/
const stringSplosion = str => {
    let str2 = "";
    let j = 0;
    for (i = 0; j <= str.length; j++) {
        str2 += str.substr(i, j);
    } return str2;
}
//OR, eliminating 'i' as unnecessary

/* const stringSplosion = str => {
    let str2 = "";
    for (j = 1; j <= str.length; j++) {
        str2 += str.substr(0, j);
    } return str2;
}
*/

console.log(stringSplosion("Code"));
console.log(stringSplosion("abc"));
console.log(stringSplosion("ab"));
/*
Goals: return number of times last 2 chars of 'str' appear in 'str'
Params: String1: str, Number1: i;
Return Val: Number;
Logic: loop through 'str' | if str.substr(i, 2) === str.substr(str.length -2, 2)
{add 1 to 'count'}
return 'count'

Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

last2("hixxhi") → 1
last2("xaxxaxaxx") → 1
last2("axxxaaxx") → 2
*/
const last2 = str => {
    let count = 0;
    for (i = 0; i < str.length - 1; i++) {
        if (str.substr(i, 2) === str.substr(str.length -2, 2)) {
            count++;
        }
    } return count;
}

console.log(last2("hixxhi"));
console.log(last2("xaxxaxaxx"));
console.log(last2("axxxaaxx"));
/*
Goals: return number of '9's that appear in a given array;
Params: Array1: arr, Number1: i, Number2: count;
Return Val: Number;
Logic: create 'count' as 0, loop through 'arr' {if arr[i] === 9, add 1 to 'count'}

Given an array of ints, return the number of 9's in the array.

arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3
*/
const arrayCount9 = arr => {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 9){
            count++;
        }
    } return count;
}

console.log(arrayCount9([1, 2, 9]));
console.log(arrayCount9([1, 9, 9]));
console.log(arrayCount9([1, 9, 9, 3, 9]));

/*
Goals: return true if one of first 4 num's in given array is 9;
Params: Array1: arr, Number1: i;
Return Val: Boolean;
Logic: loop through first 4 values of 'arr', if any === 9, return true
otherwise return false;

Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false
*/
const arrayFront9 = arr => {
    for (i = 0; i < 4; i++) {
        if (arr[i] === 9) {
            return true;
        }
    } return false;
}

console.log(arrayFront9([1, 2, 9, 3, 4]));
console.log(arrayFront9([1, 2, 3, 4, 9]));
console.log(arrayFront9([1, 2, 3, 4, 5]));
/*
Goals: check given array for sequence 1, 2, 3 & return true if present;
Params: Array1: arr, Number1: i;
Return Val: Boolean;
Logic: loop through 'arr' checking arr[i] for 1
if true, check arr[i+1] for 2
if true, check arr[i+2] for 3
if true, return true
otherwise return false;

OORRR

create 'arr2' as empty array, loop through 'arr' and if (
    arr[i] === 1 & arr[i+1] === 2 && arr[i+2] === 3)...
    arr2.push(arr[i], arr[i + 1], arr[i + 2]), return true
otherwise return false;

Given an array of ints, return true if the sequence of numbers 1, 2, 3
appears in the array somewhere.

array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true
*/
const array123 = arr => {
    for (i = 0;i < arr.length - 2;i++) {
        if (arr[i] === 1) {
            if (arr[i+1] === 2) {
                if (arr[i+2] === 3){
                    return true;
                }
            }
        }
    } return false;
}
//OOORRR
const array123 = arr => {
    for (i = 0; i < arr.length - 2; i++) {
        if (arr[i] === 1 && arr[i+1] === 2 && arr[i+2] === 3) {
            return true; 
            }
        } return false;
}

console.log(array123([1, 1, 2, 3, 1]));
console.log(array123([1, 1, 2, 4, 1]));
console.log(array123([1, 1, 2, 1, 2, 3]));
/*
Goals: return number of positions in which the same substrings (length 2) appear in 2 given strings;
Params: String1: str1, String2: str2, Num1: count;
Return Val: Number;
Logic: initiate 'count' as value 0.
loop through 'str1' indexes. Each iteration, if str1.substr(i, 2) is 
strictly equal to str2.substr(i, 2) - add 1 to 'count'
return count;

Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.

stringMatch("xxcaazz", "xxbaaz") → 3
stringMatch("abc", "abc") → 2
stringMatch("abc", "axc") → 0
*/
const stringMatch = (str1, str2) => {
    let count = 0;
    for (i = 0; i < str1.length - 1; i++) {
        if (str1.substr(i, 2) === str2.substr(i, 2)) {
            count++;
        }
    } return count;
}

console.log(stringMatch("xxcaazz", "xxbaaz"));
console.log(stringMatch("abc", "abc"));
console.log(stringMatch("abc", "axc"));
/*
Goals: return a given string with all 'x's removed, save for first and last chars;
Params: String1: str, String2: returnStr;
Return Val: String;
Logic: create returnStr as "str.charAt(0)"
loop through the string representing current index as 'i', beginning at index 1 and stopping at str.length
if charAt(i) is not equal to 'x' || i = str.length - 1 && str.charAt(i) = 'x', concatenate to 'returnStr';

Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"
*/
const stringX = str => {
    let returnStr = str.charAt(0);
    for (i = 1; i < str.length; i++) {
        if (str.charAt(i) != 'x' || i === str.length - 1 && str.charAt(i) === 'x') {
            returnStr += str.charAt(i);
        }
    } return returnStr;
}

console.log(stringX("xxHxix"));
console.log(stringX("abxxxcd"));
console.log(stringX("xabxxxcdx"));

/*
Goals: return a new string made of specific indexes from a given string;
Params: String1: str, String2: returnStr;
Return Val: String;
Logic: initialize 'returnStr' as empty string
loop through 'str', beginning at index 0, add 2 chars every 4th index to 'givenStr'
return 'givenStr';

Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

altPairs("kitten") → "kien"
altPairs("Chocolate") → "Chole"
altPairs("CodingHorror") → "Congrr"
*/
const altPairs = str => {
    let returnStr = "";
    for (i = 0; i < str.length - 1; i += 4) {
        returnStr += str.substr(i, 2);
    } return returnStr;
}

console.log(altPairs("kitten"));
console.log(altPairs("Chocolate"));
console.log(altPairs("CodingHorror"));
/*
Goals: return a new string with all the "y?k"s removed from a given string;
Params: String1: str, String2: returnStr;
Return Val: String;
Logic: initialize empty string 'returnStr'
loop through 'str', checking if str.charAt(i) === 'y' && str.charAt(i+2) === 'k', if so i+= 3
if not, add str.substr(i, 3) to 'returnStr', then i+= 2 (loop will add 3rd number to 'i')
return returnStr;

Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

stringYak("yakpak") → "pak"
stringYak("pakyak") → "pak"
stringYak("yak123ya") → "123ya"
*/
function stringYak(str) {
    let returnStr = "";
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'y' && str.charAt(i + 2) === 'k'){
          i+= 3;
        } returnStr += str.substr(i, 3);
          i+= 2;
        }return returnStr;
}

console.log(stringYak("yakpak"));
console.log(stringYak("pakyak"));
console.log(stringYak("yak123ya"));
/*
Goals: return the number of times a 6 is followed by a 7 or another 6 in a given array;
Params: Array1: arr, Number1: count;
Return Val: Number;
Logic: initialize 'count' as 0
loop through 'arr', if current index of 'arr' = 6 AND next index of 'arr' = 6 OR next index of 'arr' = 7, add 1 to 'count'
return 'count';

Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.

array667([6, 6, 2]) → 1
array667([6, 6, 2, 6]) → 1
array667([6, 7, 2, 6]) → 1
*/
const array667 = arr => {
    let count = 0;
    for (i = 0; i < arr.length - 1; i+= 1) {
        if (arr[i] === 6 && arr[i+1] === 6 || arr[i+1] === 7) {
            count += 1;
        }
    } return count;
}

console.log(array667([6, 6, 2]));
console.log(array667([6, 6, 2, 6]));
console.log(array667([6, 7, 2, 6]));
/*
Goals: return false if any number appears at 3 indexes in a row;
Params: Array1: arr;
Return Val: Boolean;
Logic: loop through 'arr', if arr[i+1] === arr[i] && arr[i+2] === arr[i], return false
otherwise return true;

Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

noTriples([1, 1, 2, 2, 1]) → true
noTriples([1, 1, 2, 2, 2, 1]) → false
noTriples([1, 1, 1, 2, 2, 2, 1]) → false
*/
const noTriples = arr => {
    for (i = 0; i < arr.length - 2; i++) {
        if (arr[i+1] === arr[i] && arr[i+2] === arr[i]) {
            return false;
        }
    } return true;
}

console.log(noTriples([1, 1, 2, 2, 1]));
console.log(noTriples([1, 1, 2, 2, 2, 1]));
console.log(noTriples([1, 1, 1, 2, 2, 2, 1]));
/*
Goals: return true if a pattern of x, x + 5, x - 1 occurs;
Params: Array1: arr;
Return Val: Boolean;
Logic: loop through 'arr'
if arr[i + 1] === arr[i] + 5 AND arr[i + 2] === arr[i] - 1, return true
otherwise return false;

Given an array of ints, return true if it contains a 2, 7, 1 pattern: a value, followed by the value plus 5, followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.

has271([1, 2, 7, 1]) → true
has271([1, 2, 8, 1]) → false
has271([2, 7, 1]) → true
*/
const has271 = arr => {
    for (i = 0; i < arr.length - 2; i++) {
        if (arr[i + 1] === arr[i] + 5 && arr[i + 2] === arr[i] - 1) {
            return true;
        }
    } return false;
}

console.log(has271([1, 2, 7, 1]));
console.log(has271([1, 2, 8, 1]));
console.log(has271([2, 7, 1]));
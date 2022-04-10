/*
Goals: 
Params: 
Return Val: 
Logic:  

Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

makeAbba("Hi", "Bye") → "HiByeByeHi"
makeAbba("Yo", "Alice") → "YoAliceAliceYo"
makeAbba("What", "Up") → "WhatUpUpWhat"
*/

const makeAbba = (str1, str2) => str1 + str2 + str2 + str1;

console.log(makeAbba("Hi", "Bye"));
console.log(makeAbba("Yo", "Alice"));
console.log(makeAbba("What", "Up"));

/*
Goals: Return a string inside the specified tags;
Params: String1: tag, String2: str;
Return Val: String;
Logic: return a string of `< + tag + > + str + </ + tag + >`

The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

makeTags("i", "Yay") → "<i>Yay</i>"
makeTags("i", "Hello") → "<i>Hello</i>"
makeTags("cite", "Yay") → "<cite>Yay</cite>"
*/

const makeTags = (tag, str) => `<` + tag + `>` + str + `</` + tag + `>`;

console.log(makeTags("i", "Yay"));
console.log(makeTags("i", "Hello"));
console.log(makeTags("cite", "Yay"));

/*
Goals: return a string with given word in middle;
Params: String1: str, String2: word;
Return Val: String;
Logic: return str.substring(0,2) + word + str.substring(2);

Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.

makeOutWord("<<>>", "Yay") → "<<Yay>>"
makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"
makeOutWord("[[]]", "word") → "[[word]]"
*/

const makeOutWord = (str, word) =>
  str.substring(0, 2) + word + str.substring(2);

console.log(makeOutWord("<<>>", "Yay"));
console.log(makeOutWord("<<>>", "WooHoo"));
console.log(makeOutWord("[[]]", "word"));

/*
Goals: return last two chars of given string 3 times as a new string;
Params: String1: str, String2: newStr;
Return Val: String
Logic: newStr = str.substring(str.length -2);
      return newStr + newStr + newStr;

Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

extraEnd("Hello") → "lololo"
extraEnd("ab") → "ababab"
extraEnd("Hi") → "HiHiHi"
*/

function extraEnd(str) {
    let newStr = str.substring(str.length - 2);
    return newStr + newStr + newStr;
  }
  
  console.log(extraEnd("Hello"));
  console.log(extraEnd("ab"));
  console.log(extraEnd("Hi"));

  /*
Goals: return first 2 chars of string, or return string if shorter than 2 chars
Params: String1: givenStr;
Return Val: String;
Logic: if givenStr is shorter than 2 chars, return givenStr
      otherwise return first 2 chars of givenStr;

Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

firstTwo("Hello") → "He"
firstTwo("abcdefg") → "ab"
firstTwo("ab") → "ab"
*/

const firstTwo = (givenStr) =>
  givenStr.length < 2 ? givenStr : givenStr.substring(0, 2);

console.log(firstTwo("Hello"));
console.log(firstTwo("abcdefg"));
console.log(firstTwo("ab"));

/*
Goals: return the first half of a given string;
Params: String1: givenStr;
Return Val: String;
Logic: return a substring of givenStr beginning at 0 and ending at givenStr.length / 2;

Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"
*/

const firstHalf = (givenStr) => givenStr.substring(0, givenStr.length / 2);

console.log(firstHalf("WooHoo"));
console.log(firstHalf("HelloThere"));
console.log(firstHalf("abcdef"));

/*
Goals: return a given string without the first and last chars;
Params: String1: givenStr;
Return Val: String;
Logic: return givenStr.substring(1, givenStr.length - 1);

Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"
*/

const withoutEnd = (givenStr) => givenStr.substring(1, givenStr.length - 1);

console.log(withoutEnd("Hello"));
console.log(withoutEnd("java"));
console.log(withoutEnd("coding"));

// OOOOORRRRRR

const withoutEnd = (givenStr) =>
  givenStr.length > 2
    ? givenStr.substring(1, givenStr.length - 1)
    : "Not long enough";

console.log(withoutEnd("Hello"));
console.log(withoutEnd("java"));
console.log(withoutEnd("coding"));
console.log(withoutEnd("ai"));

/*
Goals: return a string consisting of 2 given strings, with the shorter of the 2 on the outsides (shortLongShort);
Params: String1: str1, String2: str2;
Return Val: String;
Logic:  if str1 length < str2 length, return str1+str2+str1
        otherwise return str2+str1+str2;

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

comboString("Hello", "hi") → "hiHellohi"
comboString("hi", "Hello") → "hiHellohi"
comboString("aaa", "b") → "baaab"
*/

const comboString = (str1, str2) => 
  str1.length < str2.length
    ? str1 + str2 + str1
    : str2 + str1 + str2;

console.log(comboString("Hello", "hi"));
console.log(comboString("hi", "Hello"));
console.log(comboString("aaa", "b"));

/*
Goals: return the two strings having been combined without their first chars respectively;
Params: String1: str1, String2: str2;
Return Val: String;
Logic: return str1.substring(1) + str2.substring(1);

Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

nonStart("Hello", "There") → "ellohere"
nonStart("java", "code") → "avaode"
nonStart("shotl", "java") → "hotlava"
*/

const nonStart = (str1, str2) => str1.substring(1) + str2.substring(1);

console.log(nonStart("Hello", "There"));
console.log(nonStart("java", "code"));
console.log(nonStart("shotl", "java"));

/*
Goals: return a given string with the first two chars shifted to the end
Params: String1: str1
Return Val: String;
Logic:   if str1.length <= 2, return str1
         otherwise return str1.substring(2) + str1.substring(0,2);

Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

left2("Hello") → "lloHe"
left2("java") → "vaja"
left2("Hi") → "Hi"
*/

const left2 = (str1) =>
  str1.length <= 2 
  ? str1 
  : str1.substring(2) + str1.substring(0, 2);

console.log(left2("Hello"));
console.log(left2("java"));
console.log(left2("Hi"));

/*
Goals: return a given string with the last two characters moved to the front
Params: String1: str1
Return Val: String;
Logic:  if str1.length <= 2, return str1
        otherwise return str1.substring(str1.length - 2) + str1.substring(0, str1.length -2);

Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

right2("Hello") → "loHel"
right2("java") → "vaja"
right2("Hi") → "Hi"
*/

const right2 = (str1) =>
  str1.length <= 2
    ? str1
    : str1.substring(str1.length - 2) + str1.substring(0, str1.length - 2);

console.log(right2("Hello"));
console.log(right2("java"));
console.log(right2("Hi"));

/*
Goals: if FRONT is true, return the first char of given string, otherwise return last char
Params: String1: str1, Boolean1: front;
Return Val: String;
Logic:  if FRONT === true, return str1.substring(0, 1)
        otherwise return str1.substring(str1.length - 1)

Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.

theEnd("Hello", true) → "H"
theEnd("Hello", false) → "o"
theEnd("oh", true) → "o"
*/

const theEnd = (str1, front) => 
  front === true
  ? str1.substring(0, 1)
  : str1.substring(str1.length - 1);


console.log(theEnd("Hello", true));
console.log(theEnd("Hello", false));
console.log(theEnd("oh", true));

/*
Goals: return a given string without the first and last chars
Params: String1: str1;
Return Val: String;
Logic:  if str1.length < 3, return ""
        otherwise return str1.substring(1, str1.length - 1);

Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

withouEnd2("Hello") → "ell"
withouEnd2("abc") → "b"
withouEnd2("ab") → ""
*/

const withouEnd2 = (str1) =>
  str1.length < 3 ? "" : str1.substring(1, str1.length - 1);

console.log(withouEnd2("Hello"));
console.log(withouEnd2("abc"));
console.log(withouEnd2("ab"));

// OOOOORRRRRRRR

function withouEnd2(str1) {
    if (str1.length < 3) {
      return "";
    }
    return str1.substring(1, str1.length - 1);
  }
  
  console.log(withouEnd2("Hello"));
  console.log(withouEnd2("abc"));
  console.log(withouEnd2("ab"));

/*
Goals: return 2 middle chars of a string with an even num of chars
Params: String1: str1;
Return Val: String;
Logic: return str1.substring(str1.length / 2 - 1, str1.length / 2 + 1);

Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

middleTwo("string") → "ri"
middleTwo("code") → "od"
middleTwo("Practice") → "ct"
*/

const middleTwo = (str1) =>
  str1.substring(str1.length / 2 - 1, str1.length / 2 + 1);

console.log(middleTwo("string"));
console.log(middleTwo("code"));
console.log(middleTwo("Practice"));

// OOOOOORRRRRRR

function middleTwo(str1) {
    if (str1.length === 2) {
      return str1;
    }
    return str1.substring(str1.length / 2 - 1, str1.length / 2 + 1);
  }
  
  console.log(middleTwo("string"));
  console.log(middleTwo("code"));
  console.log(middleTwo("Practice"));

  /*
Goals: return appropriate boolean result
Params: String1: givenStr;
Return Val: Boolean;
Logic: if last two chars of given string are "ly", return true
      otherwise return false;

Given a string, return true if it ends in "ly".

endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false
*/

const endsLy = (givenStr) => {
    if (givenStr.substring(givenStr.length - 2) === "ly") {
      return true;
    }
    return false;
  };
  
  console.log(endsLy("oddly"));
  console.log(endsLy("y"));
  console.log(endsLy("oddy"));

  // OOOOORRRRRRRRR

  const endsLy = (givenStr) => 
  givenStr.substring(givenStr.length - 2) === "ly"
  ? true
  : false;

console.log(endsLy("oddly"));
console.log(endsLy("y"));
console.log(endsLy("oddy"));

/*
Goals: return the correct first and last number of chars from a given string
Params: String1: str1, Number1: num1, String2: chars1, String3: chars2;
Return Val: String;
Logic:  assign the first 'num1' chars of 'str1' to 'chars1'
        assign the last 'num1' chars of 'str1' to 'chars2'
        return 'chars1' + 'chars2';

Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.

nTwice("Hello", 2) → "Helo"
nTwice("Chocolate", 3) → "Choate"
nTwice("Chocolate", 1) → "Ce"
*/

const nTwice = (str1, num1) => {
    let chars1 = str1.substring(0, num1);
    let chars2 = str1.substring(str1.length - num1);
    return chars1 + chars2;
  };
  
  console.log(nTwice("Hello", 2));
  console.log(nTwice("Chocolate", 3));
  console.log(nTwice("Chocolate", 1));

  // OOOOOORRRRRRRRRRRR

  function twoChar(givenStr, indexNum) {
    if (givenStr.length - indexNum < 2) {
      return givenStr.substring(0, 2);
    }
    return givenStr.substring(indexNum, indexNum + 2);
  }
  
  console.log(twoChar("java", 0));
  console.log(twoChar("java", 2));
  console.log(twoChar("java", 3));

/*
Goals: return the 3 middle chars of a given string (always odd length);
Params: String1: givenStr, Number1: strLgth;
Return Val: String;
Logic: assign length of givenStr to strLgth
      return substring of givenStr beginning at strLgth / 2 - 1.5 and ending at strLgth / 2 + 1.5;

Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

middleThree("Candy") → "and"
middleThree("and") → "and"
middleThree("solving") → "lvi"
*/

const middleThree = (givenStr) => {
    let strLgth = givenStr.length;
    return givenStr.substring(strLgth / 2 - 1.5, strLgth / 2 + 1.5);
  };
  
  console.log(middleThree("Candy"));
  console.log(middleThree("and"));
  console.log(middleThree("solving"));

  /*
Goals: return true if the string contains 'bad' in the first 4 characters;
Params: String1: givenStr, String2: testStr;
Return Val: Boolean;
Logic: assign testStr to "bad"
      if testStr is equal to first 3 chars, or 2nd - 4th chars of givenStr, return true
      otherwise return false

Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. Note: use .equals() to compare 2 strings.

hasBad("badxx") → true
hasBad("xbadxx") → true
hasBad("xxbadxx") → false
*/

const hasBad = (givenStr) => {
    let testStr = "bad";
    if (testStr === givenStr.substring(0, 3) || testStr === givenStr.substring(1, 4)) {
      return true;
    }
    return false;
  };

  console.log(hasBad("badxx"));
  console.log(hasBad("xxbadxx"));  
  console.log(hasBad("xbadxx"));

  // OOOOOOOORRRRRRRR

  const hasBad = (givenStr) => 
  givenStr.substring(0, 3) === 'bad' || 
    givenStr.substring(1, 4) === 'bad'
  ? true
  : false;

console.log(hasBad("badxx"));
console.log(hasBad("xbadxx"));
console.log(hasBad("xxbadxx"));

/*
Goals: return first 2 chars of given string, or first char + '@';
Params: String1: givenStr;
Return Val: String;
Logic: if length of givenStr is 0, return '@@'
      if length of givenStr is less than 2, return givenStr + '@'
      otherwise return first 2 chars of givenStr;

Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

atFirst("hello") → "he"
atFirst("hi") → "hi"
atFirst("h") → "h@"
atFirst("") → "@@"
*/

const atFirst = (givenStr) => 
  givenStr.length === 0
  ? "@@"
    : givenStr.length === 1
    ? givenStr + "@"
    : givenStr.substring(0, 2);


console.log(atFirst("hello"));
console.log(atFirst("hi"));
console.log(atFirst("h"));
console.log(atFirst(""));

// OOOOORRRRRRR

function atFirst(givenStr) {
    if (givenStr.length === 0) {
      return "@@";
    }
    if (givenStr.length === 1) {
      return givenStr + "@";
    }
    return givenStr.substring(0, 2);
  }
  
  console.log(atFirst("hello"));
  console.log(atFirst("hi"));
  console.log(atFirst("h"));
  console.log(atFirst(""));

  /*
Goals: return a new string (first char of str1 + last char of str2), but use "@" in place of an empty string
Params: String1: str1, String2: str2;
Return Val: String;
Logic: if str1 is empty and str2 is empty, return "@@"
       if str1 is empty, return "@" plus last char of str2
       if str2 is empty, return first char of str1 plus "@"
       otherwise return first char of str1 plus last char of str2

Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

lastChars("last", "chars") → "ls"
lastChars("yo", "java") → "ya"
lastChars("hi", "") → "h@"
lastChars("", "") → "@@"
*/

function lastChars(str1, str2) {
    if (str1 === "" && str2 === "") {
      return "@@";
    }
    if (str1 === "") {
      return "@" + str2.substring(str2.length - 1);
    }
    if (str2 === "") {
      return str1.substring(0, 1) + "@";
    }
    return str1.substring(0, 1) + str2.substring(str2.length - 1);
  }
  
  console.log(lastChars("last", "chars"));
  console.log(lastChars("yo", "java"));
  console.log(lastChars("hi", ""));
  console.log(lastChars("", ""));
  

  // OOOOOOORRRRRRRRRR

  const lastChars = (str1, str2) =>
  str1 === "" && str2 === ""
    ? "@@"
    : str1 === ""
    ? "@" + str2.substring(str2.length - 1)
    : str2 === ""
    ? str1.substring(0, 1) + "@"
    : str1.substring(0, 1) + str2.substring(str2.length - 1);

console.log(lastChars("last", "chars"));
console.log(lastChars("yo", "java"));
console.log(lastChars("hi", ""));
console.log(lastChars("", ""));

/*
Goals: return the two given strings together, unless the appending characters are equal, in which case remove one of the two;
Params: String1: str1, String2: str2;
Return Val: String;
Logic: if last char of str1 and first char of str2 are equal, omit last char of str1
      otherwise return str1 plus str2;

Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

conCat("abc", "cat") → "abcat"
conCat("dog", "cat") → "dogcat"
conCat("abc", "") → "abc"
*/

const conCat = (str1, str2) =>
  str1.substring(str1.length - 1) === str2.substring(0, 1)
    ? str1.substring(0, str1.length - 1) + str2
    : str1 + str2;

console.log(conCat("abc", "cat"));
console.log(conCat("dog", "cat"));
console.log(conCat("abc", ""));

/*
Goals: return the last 2 chars of a given string unless the string is fewer than 2 characters;
Params: String1: givenStr, String2: newEnd, String3: lastChar;
Return Val: String;
Logic:  assign newEnd to 2nd to last char of givenStr
        assign lastChar to last char of givenStr
        return substring of givenStr excluding last two chars and add newEnd and then lastChar;

Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

lastTwo("coding") → "codign"
lastTwo("cat") → "cta"
lastTwo("ab") → "ba"
*/

const lastTwo = (givenStr) => {
    let newEnd = givenStr.substring(givenStr.length - 2, givenStr.length - 1);
    let lastChar = givenStr.substring(givenStr.length - 1);
    return givenStr.substring(0, givenStr.length - 2) + lastChar + newEnd;
  }
  
  console.log(lastTwo("coding"));
  console.log(lastTwo("cat"));
  console.log(lastTwo("ab"));

  /*
Goals: if a given string begins with 'red' or 'blue', return a string with said name, otherwise empty;
Params: String1: givenStr;
Return Val: String;
Logic:  if first 3 chars equal 'red', return 'red'
        if first 4 chars equal 'blue', return 'blue'
        otherwise return '';

Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

seeColor("redxx") → "red"
seeColor("xxred") → ""
seeColor("blueTimes") → "blue"
*/

const seeColor = (givenStr) =>
  givenStr.substring(0, 3) === "red"
    ? "red"
    : givenStr.substring(0, 4) === "blue"
    ? "blue"
    : "";

console.log(seeColor("redxx"));
console.log(seeColor("xxred"));
console.log(seeColor("blueTimes"));

  /*
Goals: return appropriate boolean value having checked first and last 2 chars for equality;
Params: String1: givenStr;
Return Val: Boolean;
Logic: if first two chars of givenStr are strictly equal to last two chars of givenStr, return true
      otherwise return false;

Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

frontAgain("edited") → true
frontAgain("edit") → false
frontAgain("ed") → true
*/

const frontAgain = (givenStr) => 
  givenStr.substring(0, 2) === givenStr.substring(givenStr.length - 2)
  ? true
  : false;

console.log(frontAgain("edited"));
console.log(frontAgain("edit"));
console.log(frontAgain("ed"));

  /*
Goals: return two given strings together, unless different lengths, then return two equally length strings by appending the longer;
Params: String1: str1, String2: str2, Number1: lgth1, Number2: lgth2;
Return Val: String;
Logic:   assign length of str1 to lgth1 and length of str2 to lgth2
        if lgth1 and lgth2 are equal, return str1 + str2
        if lgth1 > lgth2, return substring of str1 (beginning at str1.length - lgth2) + str2
        otherwise return str1 + substring of str2 (beginning at str2.length - lgth1)


Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.


minCat("Hello", "Hi") → "loHi"
minCat("Hello", "java") → "ellojava"
minCat("java", "Hello") → "javaello"
*/

const minCat = (str1, str2) =>
  str1.length === str2.length
    ? str1 + str2
    : str1.length > str2.length
    ? str1.substring(str1.length - str2.length) + str2
    : str1 + str2.substring(str2.length - str1.length);

console.log(minCat("Hello", "Hi"));
console.log(minCat("Hello", "java"));
console.log(minCat("java", "Hello"));

// OOOOOORRRRRRRR

const minCat = (str1, str2) => {
    let lgth1 = str1.length;
    let lgth2 = str2.length;
    // INITIATE TERNARY WITH 'RETURN' bc INSIDE CODE BLOCK
    return lgth1 === lgth2
      ? str1 + str2
      : lgth1 > lgth2
      ? str1.substring(lgth1 - lgth2) + str2
      : str1 + str2.substring(lgth2 - lgth1)
  };
  
  console.log(minCat("test", "test"));
  console.log(minCat("Hello", "Hi"));
  console.log(minCat("Hello", "java"));
  console.log(minCat("java", "Hello"));

  /*
Goals: return a string made of first 2 chars of a given string, or first char if that's all there is;
Params: String1: givenStr, String2: firstTwo;
Return Val: String;
Logic:  if givenStr length <= 2, return givenStr + givenStr + givenStr
        otherwise assign firstTwo to the first 2 chars of givenStr
         then return firstTwo + firstTwo + firstTwo;
        

Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

extraFront("Hello") → "HeHeHe"
extraFront("ab") → "ababab"
extraFront("H") → "HHH"
*/

function extraFront(givenStr) {
    if (givenStr.length <= 2) {
      return givenStr + givenStr + givenStr;
    }
    let firstTwo = givenStr.substring(0, 2);
    return firstTwo + firstTwo + firstTwo;
  }
  
  console.log(extraFront("Hello"));
  console.log(extraFront("ab"));
  console.log(extraFront("H"));

/*
Goals: return the given string unless the first and last 2 chars are the same, then return given string without the first 2 chars
Params: String1: givenStr, String2: firstTwo, String3: lastTwo;
Return Val: String;
Logic:  assign firstTwo to first 2 chars of givenStr
        assign lastTwo to last 2 chars of givenStr
        if givenStr length <= 2, return an empty string
        otherwise if firstTwo and lastTwo are strictly equal, return givenStr without the first 2 chars
        otherwise return givenStr;

Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

without2("HelloHe") → "lloHe"
without2("HelloHi") → "HelloHi"
without2("Hi") → ""
*/

function without2(givenStr) {
    let firstTwo = givenStr.substring(0, 2);
    let lastTwo = givenStr.substring(givenStr.length - 2);
    if (givenStr.length <= 2) {
      return ``;
    }
    if (firstTwo === lastTwo) {
      return givenStr.substring(2);
    }
    return givenStr;
  }
  
  console.log(without2("HelloHe"));
  console.log(without2("HelloHi"));
  console.log(without2("Hi"));

// OOOOORRRRRRRRRR

const without2 = (givenStr) => {
    let firstTwo = givenStr.substring(0, 2);
    let lastTwo = givenStr.substring(givenStr.length - 2);
    return givenStr.length <= 2
      ? ""
      : firstTwo === lastTwo
      ? givenStr.substring(2)
      : givenStr;
  };
  
  console.log(without2("HelloHe"));
  console.log(without2("HelloHi"));
  console.log(without2("Hi"));

  
  /*
Goals: return given string without first 2 chars, but if first char is 'a', keep that char, and if 2nd char is 'b', keep that char
Params: String1: givenStr;
Return Val: String;
Logic:  
        if first two chars of givenStr are 'ab', return givenStr
        if first char is 'a', return givenStr without 2nd char
        if second char is 'b', return givenStr without 1st char

Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length.

deFront("Hello") → "llo"
deFront("java") → "va"
deFront("away") → "aay"
*/

const deFront = (givenStr) =>
  givenStr.substring(0, 2) === "ab"
    ? givenStr
    : givenStr.substring(0, 1) === "a"
    ? "a" + givenStr.substring(2)
    : givenStr.substring(1, 2) === "b"
    ? givenStr.substring(1)
    : givenStr.substring(2);

console.log(deFront("Hello"));
console.log(deFront("java"));
console.log(deFront("away"));

/*
Goals: 
Params: String1: str1, String2: str2, String3: wordLng;
Return Val: String;
Logic:  assign wordLng to length of str2
        if substring of str1 (2nd char - 'wordLng') is equal to substring of str2 (2nd char - 'wordLng'), return substring of str1 (0, wordLng)
        otherwise return an empty string

Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

startWord("hippo", "hi") → "hi"
startWord("hippo", "xip") → "hip"
startWord("hippo", "i") → "h"
*/

const startWord = (str1, str2) => {
    let wordLng = str2.length;
    return str1.substring(1, wordLng) === str2.substring(1, wordLng)
    ? str1.substring(0, wordLng)
    : ''
  };
  
  /*function startWord(str1, str2) {
    let wordLng = str2.length;
    if (str1.substring(1, wordLng) === str2.substring(1, wordLng)) {
      return str1.substring(0, wordLng);
    }
    return "";
  }
  */
  
  console.log(startWord("hippo", "hi"));
  console.log(startWord("hippo", "xip"));
  console.log(startWord("hippo", "i"));
  
  /*
Goals: return a given string without (if present) an 'x' at the beginning and/or end;
Params: String1: givenStr
Return Val: String;
Logic: if first char of givenStr is 'x'...
          if last char of givenStr is 'x', return substring of givenStr (from 1 to length of givenStr - 1)
          else return givenStr without 1st char
       if last char of givenStr is 'x', return givenStr without last char
       otherwise return givenStr

Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

withoutX("xHix") → "Hi"
withoutX("xHi") → "Hi"
withoutX("Hxix") → "Hxi"
*/

function withoutX(givenStr) {
    if (givenStr.substring(0, 1) === "x") {
      if (givenStr.substring(givenStr.length - 1) === "x") {
        return givenStr.substring(1, givenStr.length - 1);
      }
      return givenStr.substring(1);
    }
    if (givenStr.substring(givenStr.length - 1) === "x") {
      return givenStr.substring(0, givenStr.length - 1);
    }
    return givenStr;
  }
  
  console.log(withoutX("xHix"));
  console.log(withoutX("xHi"));
  console.log(withoutX("Hxix"));
  console.log(withoutX("Hello?"));
  
  // jfklsdjfksldjfklsdjfksd
/* 
Goal: return 'true' if we sleep in;
Params: Boolean1: weekday, Boolean2: vacation;
Return Val: Boolean
Logic: If vacation is true
       True
       If vacation is false and weekday is true
       False

The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are 
on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

sleepIn(false, false) → true
sleepIn(true, false) → false
sleepIn(false, true) → true 
*/

function sleepIn(weekday, vacation) {
    if (vacation === true) {
      return true;
    } else if (weekday === true) {
      return false;
    }
    return true;
  }
  
  console.log(sleepIn(false, false));
  console.log(sleepIn(true, false));
  console.log(sleepIn(false, true));
  
/* 
Goals: return true if we are in trouble
Params: Boolean1: aSmile, Boolean2: bSmile
Return Val: Boolean
Logic: if aSmile and bSmile have the same value
        return true

We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling.
We are in trouble if they are both smiling or if neither of them is smiling. Return true if we 
are in trouble.

monkeyTrouble(true, true) → true
monkeyTrouble(false, false) → true
monkeyTrouble(true, false) → false
*/

function monkeyTrouble(aSmile, bSmile) {
    if (aSmile === bSmile) {
      return true;
    }
    return false;
  }
  
  console.log(monkeyTrouble(true, true));
  console.log(monkeyTrouble(false, false));
  console.log(monkeyTrouble(true, false));

  /*
Goals: return sum of 2 vals or return 2(sum) if vals are equal
Params: Number1: i, Number2: j
Return Val: Number
Logic: If i is equal to j, return 2 * (i + j)
       otherwise return i + j

Given two int values, return their sum. Unless the two values are the same, then 
return double their sum.

sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8
*/

function sumDouble(i, j) {
    if (i === j) {
      return 2 * (i + j);
    }
    return i + j;
  }
  
  console.log(sumDouble(1, 2));
  console.log(sumDouble(3, 2));
  console.log(sumDouble(2, 2));

/*
Goals: return 21 minus n but if n is more than 21, return double the difference
Params: Number1: 21, Number2: n;
Return Val: Number;
Logic: if n > 21, return 2 * (21 - n); 
      otherwise return 21 - n

Given an int n, return the absolute difference between n and 21,
except return double the absolute difference if n is over 21.

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0
*/

function diff21(n) {
    if (n > 21) {
      return 2 * (21 - n);
    }
    return 21 - n;
  }
  
  console.log(diff21(19));
  console.log(diff21(10));
  console.log(diff21(21));  

/*
Goals: return true if we are in trouble
Params: Number1: hour, Boolean1: talking 
Return Val: Boolean
Logic: if hour is less than 7 or more than 20, check if talking
      is true. If true, return true;
      otherwise return false

We have a loud talking parrot. The "hour" parameter is the 
current hour time in the range 0..23. We are in trouble if the 
parrot is talking and the hour is before 7 or after 20. Return 
true if we are in trouble.

parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false
*/

function parrotTrouble(talking, hour) {
    if (hour < 7 || hour > 20) {
      if (talking === true) {
        return true;
      }
    }
    return false;
  }
  
  console.log(parrotTrouble(true, 6));
  console.log(parrotTrouble(true, 7));
  console.log(parrotTrouble(false, 6));

/*
Goals: return true if either is 10 or their sum is 10;
Params: Number1: a, Number2: b, Number3: i;
Return Val: Boolean
Logic: initialize i as a + b
      if a, b, or i equal 10, return true
      otherwise return false
       

Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true
*/

function makes10(a, b) {
    let i = a + b;
    if (a === 10 || b === 10 || i === 10) {
      return true;
    }
    return false;
  }
  
  console.log(makes10(9, 10));
  console.log(makes10(9, 9));
  console.log(makes10(1, 9));

/*
Goals: return true if n is within 10 of 100 or 200
Params: Number1: n;
Return Val: Boolean;
Logic: if 200 - n is <= 10 OR 100 - n <= 10, return true
      if n - 200 is <= 10 OR n - 100 <= 10, return true
      otherwise return false

Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes
 the absolute value of a number.

nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false
*/

function nearHundred(n) {
    if (Math.abs(200 - n) <= 10 || Math.abs(100 - n) <= 10) {
      return true;
    }
    return false;
    if (Math.abs(n - 200) <= 10 || Math.abs(n - 100) <= 10) {
      return true;
    }
    return false;
  }
  
  console.log(nearHundred(93));
  console.log(nearHundred(90));
  console.log(nearHundred(89));

  /*
Goals: return true if one of numbers is negative and other is positive
Params: Number1: a, Number2: b, Boolean: negative;
Return Val: Boolean
Logic: if negative is true, return true if both are negative
      otherwise return false
      if negative is false, return true if one is negative and other is positive

Given 2 int values, return true if one is negative and one is positive. Except if the 
parameter "negative" is true, then return true only if both are negative.

posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true
*/

function posNeg(a, b, negative) {
    if (negative === true) {
      if (a < 0 && b < 0) {
        return true;
      }
      return false;
    }
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      return true;
    }
    return false;
  }
  
  console.log(posNeg(1, -1, false));
  console.log(posNeg(-1, 1, false));
  console.log(posNeg(-4, -5, true));

/*
Goals: return a new string beginning with 'not ', unless given 
      string begins with same;
Params: String: given;
Return Val: String;
Logic: if string doesn't start with 'not ', return "not " + string;
      otherwise return string

Given a string, return a new string where "not " has been added to the front. However, 
if the string already begins with "not", return the string unchanged. Note: use .equals()
 to compare 2 strings.

notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"
*/

function notString(string) {
    if (!string.startsWith("not ")) {
      return "not " + string;
    }
    return string;
  }
  
  console.log(notString("candy"));
  console.log(notString("x"));
  console.log(notString("not bad"));

/*
Goals: Return a new string equal to given string but having removed the (n)th character;
Params: String1: str, Number: n;
Return Val: String;
Logic: return string (0 thru n) + (n thru string.length)

Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

missingChar("kitten", 1) → "ktten"
missingChar("kitten", 0) → "itten"
missingChar("kitten", 4) → "kittn"
*/

function missingChar(str, n) {
    let a = str.substring(0, n);
    let b = str.substring(n + 1, str.length);
    return a + b;
  }
  
  console.log(missingChar("kitten", 1));
  console.log(missingChar("kitten", 0));
  console.log(missingChar("kitten", 4));
  
/*
Goals: return given string having swapped first and last chars
Params: 5 Strings (i thru m);
Return Val: String;
Logic: if str.length = 1, return string
      if str.length = 2, i = first char, j = last char, return j + i
      otherwise k = last char, l = 2nd char thru 2nd to 
        last char, m = first char, return k + l + m;

Given a string, return a new string where the first and last chars have been exchanged.

frontBack("code") → "eodc"
frontBack("a") → "a"
frontBack("ab") → "ba"
*/

function frontBack(str) {
    if (str.length === 1) {
      return str;
    }
    if (str.length === 2) {
      let i = str[0];
      let j = str[str.length - 1];
      return j + i;
    }
    {
      let k = str[str.length - 1];
      let l = str.substring(1, str.length - 1);
      let m = str[0];
      return k + l + m;
    }
  }
  
  console.log(frontBack("code"));
  console.log(frontBack("a"));
  console.log(frontBack("ab"));

/*
Goals: return 3 copies of 'front' (first 3 chars of given string);
Params: String1: str, String2: front;
Return Val: String;
Logic: if str.length is 3, return str + str + str
      if str.length is > 3 assign front to str chars 1 - 3 and return front + front + front
      otherwise return "String not long enough";

Given a string, we'll say that the front is the first 3 chars of the 
string. If the string length is less than 3, the front is whatever
is there. Return a new string which is 3 copies of the front.

front3("Java") → "JavJavJav"
front3("Chocolate") → "ChoChoCho"
front3("abc") → "abcabcabc"
*/

function front3(str) {
    if (str.length === 3) {
      return str + str + str;
    }
    if (str.length > 3) {
      let front = str.substring(0, 3);
      return front + front + front;
    }
    return "String not long enough";
  }
  console.log(front3("Java"));
  console.log(front3("Chocolate"));
  console.log(front3("abc"));
  console.log(front3("NO"));

/*
Goals: return given string with last char added to beginning and end;
Params: String1: str, String2: i
Return Val: String
Logic: if str.length is 1, return str + str + str
      otherwise, i = str.length - 1, return i + str + i

Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.

backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"
*/

function backAround(str) {
    if (str.length === 1) {
      return str + str + str;
    }
    let i = str[str.length - 1];
    return i + str + i;
  }
  console.log(backAround("cat"));
  console.log(backAround("Hello"));
  console.log(backAround("a"));
  console.log(backAround("hi"));

/*
Goals: return true if given number over 0 has remainder of 0 when divided by 3 or 5
Params: Number: i,
Return Val: Boolean
Logic: if ()

Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator -- see Introduction to Mod

or35(3) → true
or35(10) → true
or35(8) → false
*/

function or35(i) {
    if (i % 3 === 0 || i % 5 === 0) {
      return true;
    } return false;
  }
  console.log(or35(3));
  console.log(or35(10));
  console.log(or35(8));

  /*
Goals: 
Params: Number: 
Return Val: 
Logic: 

Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.

front22("kitten") → "kikittenki"
front22("Ha") → "HaHaHa"
front22("abc") → "ababcab"
*/

function front22(str) {
    if (str.length <=2){
      return str + str + str;
    }
    let i = str.substring(0, 2);
    return i + str + i;
  }
  console.log(front22("kitten"));
  console.log(front22("Ha"));
  console.log(front22("abc"));

  /*
Goals: 
Params: Number: 
Return Val: 
Logic: 

Given a string, return true if the string starts with "hi" and false otherwise.

startHi("hi there") → true
startHi("hi") → true
startHi("hello hi") → false
*/

function startHi(str) {
    if (str.substring(0,2) === "hi") {
      return true;
    } return false;
  }
  console.log(startHi("hi there"));
  console.log(startHi("hi"));
  console.log(startHi("hello hi"));

/*
Goals: 
Params: Number: 
Return Val: 
Logic: 


Given two temperatures, return true if one is less than 0 and the other is greater than 100.


icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false

*/

function icyHot(i, j) {
    if ((i > 100 && j < 0) || (i < 0 && j > 100)) {
      return true;
    }
    return false;
  }
  console.log(icyHot(120, -1));
  console.log(icyHot(-1, 120));
  console.log(icyHot(2, 120));

  /*
Goals: 
Params: Number: 
Return Val: 
Logic: 


Given 2 int values, return true if either of them is in the range 10..20 inclusive.


in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false

*/

function in1020(i, j) {
    if (i > 9 && i < 21 || j > 9 && j < 21) {
      return true;
    } return false;
  }
  console.log(in1020(12, 99));
  console.log(in1020(21, 12));
  console.log(in1020(8, 99));

/*
Goals: return true if one or more arguments are between/equal to 13 and 19;
Params: Number: i, Number2: j, Number3: k;
Return Val: Boolean;
Logic: if i OR j OR k are betwen/equal to 13 and 19, return true
      or return false;

We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true
*/

function hasTeen(i, j, k) {
  if (i >= 13 && i <= 19 ||
      j >= 13 && j <= 19 ||
      k >= 13 && k <= 19) {
    return true;
  } return false;
}

console.log(hasTeen(13, 20, 10));
console.log(hasTeen(20, 19, 10));
console.log(hasTeen(20, 10, 13));

/*
Goals: if one of given numbers is between 13 and 19 (inclusive), unless neither or both
Params: Num1: i, Num2: j, Num3: k
Return Val: Boolean
Logic:  if i or j <13 & >19

We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false
*/

function loneTeen(i, j) {
  if ((i >= 13 && i <= 19) || (j >= 13 && j <= 19)) {
    if (i === j) {
      return false;
    }
    return true;
  }
  return false;
}
console.log(loneTeen(13, 99));
console.log(loneTeen(21, 19));
console.log(loneTeen(13, 13));

/*
Goals: if one of given numbers is between 13 and 19 (inclusive), unless neither or both
Params: Str: str
Return Val: String
Logic: 

Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

delDel("adelbc") → "abc"
delDel("adelHello") → "aHello"
delDel("adedbc") → "adedbc"
*/

function delDel(str) {
  if (str.substring(1, 4) === "del") {
    return str.substring(0, 1) + str.substring(4);
  }
  return str;
}
console.log(delDel("adelbc"));
console.log(delDel("adelHello"));
console.log(delDel("adedbc"));

// OR TERNARY ... 

function delDel(str) {
  return (str.substring(1,4) === "del" ? str.substring(0,1) + str.substring(4) : str);
}

/*
Goals: return true if given string begins with "(i)ix"
Params: String: str
Return Val: Boolean
Logic: if 2nd - 3rd characters are equal to 'ix', return true
        otherwise return false

Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.

mixStart("mix snacks") → true
mixStart("pix snacks") → true
mixStart("piz snacks") → false
*/

function mixStart(str) {
  if (str.substring(1, 3) === "ix") {
    return true;
  }
  return false;
}
console.log(mixStart("mix snacks"));
console.log(mixStart("pix snacks"));
console.log(mixStart("piz snacks"));

// OR TERNARY ....

const mixStart = str => str.substring(1,3) === 'ix' ? true : false;

/*
Goals: return a string of the first and/or second character if they are o and/or z respectively;
Params: String: str
Return Val: String
Logic:  if first char is 'o', check if second char is 'z',
          if true, return first 2 chars of str,
          otherwise 

Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".

startOz("ozymandias") → "oz"
startOz("bzoo") → "z"
startOz("oxx") → "o"
*/

function startOz(str) {
  if (str.substring(0, 1) === "o" && str.substring(1, 2) === "z") {
    return str.substring(0, 2);
  }
  if (str.substring(0, 1) === "o") {
    return "o";
  }
  if (str.substring(1, 2) === "z") {
    return "z";
  }
}
console.log(startOz("ozymandias"));
console.log(startOz("bzoo"));
console.log(startOz("oxx"));

/*
Goals: return highest value of given numbers
Params: ?Numbers?
Return Val: Number
Logic:  return max value of given intergers

Given three int values, a b c, return the largest.

intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3
*/

const intMax = (...nums) => Math.max(...nums);

console.log(intMax(1, 2, 3));
console.log(intMax(1, 3, 2));
console.log(intMax(3, 2, 1));

/*
Goals: 
Params: 
Return Val: 
Logic:  

Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0
*/

function close10(a, b) {
  let num1 = Math.abs(a - 10);
  let num2 = Math.abs(b - 10);
  if (num1 === num2) {
    return 0;
  }
  if (num1 < num2) {
    return a;
  }
  return b;
}

console.log(close10(8, 13));
console.log(close10(13, 8));
console.log(close10(13, 7));

/*
Goals: Return true if both given values are between 30 and 40 (inc) or 40 and 50 (inc);
Params: Number1: num1, Number2: num2;
Return Val: Boolean;
Logic:  If num1 is >= 30 && <= 40, if so check if num2 meets the same req, and if so return true, otherwise...
        check if num1 >= 40 && <= 50, if so check if num2 meets the same req, and if so return true...
        otherwise return false;

Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true
*/

function in3050(num1, num2) {
  if (num1 >= 30 && num1 <= 40) {
    if (num2 >= 30 && num2 <= 40) {
      return true;
    }
  }
  if (num1 >= 40 && num1 <= 50) {
    if (num2 >= 40 && num2 <= 50) {
      return true;
    }
  }
  return false;
}

console.log(in3050(30, 31));
console.log(in3050(30, 41));
console.log(in3050(40, 50));

/*
Goals: Return the larger of 2 given numbers if between 10 and 20 (inc), or return 0 if neither are in that range.
Params: Number1: num1, Number2: num2;
Return Val: Number;
Logic: if num1 & num2 are >= 10 OR <= 20, return the higher number
      otherwise return 0;

Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11
*/

function max1020(num1, num2) {
  if ((num1 && num2) >= 10 || (num1 && num2) <= 20) {
    return Math.max(num1, num2);
  }
  return 0;
}

console.log(max1020(11, 19));
console.log(max1020(19, 11));
console.log(max1020(11, 9));

/*
Goals: return true if there are 1-3 'e's in a given string, otherwise return false;
Params: String1: givenStr, Number1: count
Return Val: Boolean;
Logic:  run a loop iterating through given string
        if char at current index is 'e', add 1 to 'count'
        if 'count' is between 1 and 3, return 'true'
        otherwise return false;
  
Return true if the given string contains between 1 and 3 'e' chars.

stringE("Hello") → true
stringE("Heelle") → true
stringE("Heelele") → false
*/

function stringE(givenStr) {
  let count = 0;
  for (let i = 0; i <= givenStr.length; i++) {
    if (givenStr.charAt(i) === "e") {
      count++;
    }
  }
  if (count >= 1 && count <= 3) {
    return true;
  }
  return false;
}

console.log(stringE("Hello"));
console.log(stringE("Heelle"));
console.log(stringE("Heelele"));

/*
Goals: Return true if both given numbers share the same 'last' digit, else return false;
Params: Number1: i, Number2: j;
Return Val: Boolean;
Logic:  if remainder of (i & j)/10 are equal, return true
        otherwise return false;

Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.

lastDigit(7, 17) → true
lastDigit(6, 17) → false
lastDigit(3, 113) → true
*/

const lastDigit = (i, j) => (i % 10 === j % 10 ? true : false);

console.log(lastDigit(7, 17));
console.log(lastDigit(6, 17));
console.log(lastDigit(3, 113));

// OOOORRRRRRR

function lastDigit(i, j) {
  if (i % 10 === j % 10) {
    return true;
  }
  return false;
}

console.log(lastDigit(7, 17));
console.log(lastDigit(6, 17));
console.log(lastDigit(3, 113));


/*
Goals: Return given string having capitalized the last 3 chars, unless given string length < 3, then return capitzlized version;
Params: String1: str1, String2: str2;
Return Val: String;
Logic:  if length of str1 >= 3, 
          define str2 as a substring of str1 beginning at (str1.length - 3)
          return a substring of str1 (beginning at 0 and ending at str1.length - 3,) + str2
        otherwise return a capitalized version of str1;

Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

endUp("Hello") → "HeLLO"
endUp("hi there") → "hi thERE"
endUp("hi") → "HI"
*/

function endUp(str1) {
  if (str1.length >= 3) {
    let str2 = str1.substring(str1.length - 3);
    let str3 = str2.toUpperCase();
    return str1.substring(0, str1.length - 3) + str3;
  }
  return str1.toUpperCase();
}

console.log(endUp("Hello"));
console.log(endUp("hi there"));
console.log(endUp("hi"));

/*
Goals: Return the first char of given string and then every "nth" char;
Params: String1: str, Number1: n;
Return Val: String;
Logic:  

Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

everyNth("Miracle", 2) → "Mrce" 
everyNth("abcdefg", 2) → "aceg"
everyNth("abcdefg", 3) → "adg"
*/

function everyNth(str, n) {
  let newStr = str.substring(0, 1);
  for (let i = n; n <= str.length; n += i) {
    newStr += str.substr(n, 1);
  }
  return newStr;
}

console.log(everyNth("Miracle", 2));
console.log(everyNth("abcdefg", 2));
console.log(everyNth("abcdefg", 3));


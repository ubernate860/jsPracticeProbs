/*
Goals: If either first or last element in 'arr' is 6, return true;
Params: Object: arr;
Return Val: Boolean;
Logic:  if first element of arr is 6, return true
        else if last element of arr is 6, return true
        else return false;

Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
*/

function firstLast6(arr) {
    if (arr[0] === 6) {
      return true;
    }
    if (arr[arr.length - 1] === 6) {
      return true;
    }
    return false;
  }
  
  console.log(firstLast6([1, 2, 6]));
  console.log(firstLast6([6, 1, 2, 3]));
  console.log(firstLast6([13, 6, 1, 2, 3]));

  /*
Goals: Return true if a given array with a length more than 1 has the same first and last chars;
Params: Object: arr;
Return Val: Boolean;
Logic:  if first element of 'arr' is equal to the last element, return true
        otherwise return false;

Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true
*/

function sameFirstLast(arr) {
    if (arr[0] === arr[arr.length - 1]) {
      return true;
    }
    return false;
  }
  
  console.log(sameFirstLast([1, 2, 3]));
  console.log(sameFirstLast([1, 2, 3, 1]));
  console.log(sameFirstLast([1, 2, 1]));

  /*
Goals: Do what they said....
Params: null;
Return Val: Object;
Logic: Do what they said....

Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

makePi() → [3, 1, 4]
*/

function makePi() {
    return [3, 1, 4];
  }
  
  console.log(makePi());

  /*
Goals: Return true if either first or last elements of both given arrays are the same;
Params: Object1: arr1, Object2: arr2;
Return Val: Boolean;
Logic:  if first element of arr1 is equal to first element of arr2, return true
      else if last element of arr1 is equal to last element of arr2, return true
      else return false;

Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

commonEnd([1, 2, 3], [7, 3]) → true
commonEnd([1, 2, 3], [7, 3, 2]) → false
commonEnd([1, 2, 3], [1, 3]) → true
*/

function commonEnd(arr1, arr2) {
    if (arr1[0] === arr2[0] 
        || arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
      return true;
    }
    return false;
  }
  
  console.log(commonEnd([1, 2, 3], [7, 3]));
  console.log(commonEnd([1, 2, 3], [7, 3, 2]));
  console.log(commonEnd([1, 2, 3], [1, 3]));

/*
Goals: Return the sum of 3 elements in a given array;
Params: Object1: arr;
Return Val: Boolean;
Logic:  return 1st element + 2nd element + 3rd element of 'arr';

Given an array of ints length 3, return the sum of all the elements.

sum3([1, 2, 3]) → 6
sum3([5, 11, 2]) → 18
sum3([7, 0, 0]) → 7
*/

const sum3 = arr => arr[0] + arr[1] + arr[2];

console.log(sum3([1, 2, 3]));
console.log(sum3([5, 11, 2]));
console.log(sum3([7, 0, 0]));

/*
Goals: Return a given array having placed the first element to the end;
Params: Object1: arr, Object2: arr2;
Return Val: Object;
Logic:  'push' the first element to the end of the array
        shift the first element out of the array;

Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

rotateLeft3([1, 2, 3]) → [2, 3, 1]
rotateLeft3([5, 11, 9]) → [11, 9, 5]
rotateLeft3([7, 0, 0]) → [0, 0, 7]
*/

function rotateLeft3(arr) {
    arr.push(arr[0]);
    arr.shift(arr[0]);
    return arr;
  }
  
  console.log(rotateLeft3([1, 2, 3]));
  console.log(rotateLeft3([5, 11, 9]));
  console.log(rotateLeft3([7, 0, 0]));

/*
Goals: Return given array with first and last elements swapped;
Params: Object1: arr; Undefined?: lastEl;
Return Val: Object;
Logic:  assign lastEl to the last element in 'arr'
        'pop' the last element out of 'arr'
        'push' the first element of 'arr' to the end of 'arr'
        'shift' the first element out of 'arr'
        'unshift' 'lastEl' to the beginning of 'arr';
        
Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

reverse3([1, 2, 3]) → [3, 2, 1]
reverse3([5, 11, 9]) → [9, 11, 5]
reverse3([7, 0, 0]) → [0, 0, 7]
*/

function reverse3(arr) {
    const lastEl = arr[arr.length - 1];
    arr.pop(arr);
    arr.push(arr[0]);
    arr.shift(arr);
    arr.unshift(lastEl);
    return arr;
  }
  
  console.log(reverse3([1, 2, 3]));
  console.log(reverse3([5, 11, 9]));
  console.log(reverse3([7, 0, 0]));

// OOOOOOOOORRRRRRRRR

const reverse3 = arr => arr.reverse();

console.log(reverse3([1, 2, 3]));
console.log(reverse3([5, 11, 9]));
console.log(reverse3([7, 0, 0]));

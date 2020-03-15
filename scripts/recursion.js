/**
 * Recursion
 */

const mainBox = {
  box1: {
    balls: 1
  },

  box2: {
    apples: 5
  },

  key: 1,
  cat: 1
}

const arr = [1, 4, 99, 15];

function lookForKey(obj) {
  for (let item in obj) {        
    if (typeof obj[item] === 'object') {
      console.log('Check nested box - ', item)
      lookForKey(item);
    } else if (item === 'key') {
      console.log('Key found');
    }
  }
}

function factorial(num) {
  if (num === 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

function sum(arr) {
  return arr.length ? arr[0] + sum(arr.slice(1)) : 0;
}

function countElements(arr) {
  return arr.length ? 1 + countElements(arr.slice(1)) : 0;  
}

function maxValue(arr) {
  let result;

  // TODO

  return result;
}

console.log('Recursion');
lookForKey(mainBox);
console.log('Factorial of number 5 is: ', factorial(5));
console.log('Numbers array: ', arr);
console.log('Recursive summ: ', sum(arr));
console.log('Recursive length: ', countElements(arr));
console.log('Reursive max value: ', maxValue(arr));
console.log('-----------------------------');

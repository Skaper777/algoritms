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

console.log('Recursion');
lookForKey(mainBox);
console.log('Factorial of number 5 is: ', factorial(5));
console.log('-----------------------------');
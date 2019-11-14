const util = require('./myUtils.js');
const reader = require('readline-sync');
let firstNum = reader.questionInt('First Number ');
let secondNum = reader.questionInt('Second Number ');

function primesInBetween(num1, num2) {
  if (num1 > 0 && num2 > 0) {
    let primesArr = [];
    for (let i = num1; i <= num2; i++) {
      if (util.isPrime(i)) {
        primesArr.push(i);
      }
    }

    if (primesArr.length) {
      return primesArr;
    }
    return 'There is no Prime numbers';
  }
  return 'Please insert positive values';
}

let elems = primesInBetween(firstNum, secondNum);
util.printValues(elems);

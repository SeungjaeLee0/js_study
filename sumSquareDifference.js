//Project Euler: Problem 6: Sum square difference
function sumSquareDifference(n) {
    const range = (start, stop, step) => Array.from({ length: (stop - start + 1) / step }, (_, i) => start + (i * step));
    const numbers = range(1, n, 1);
    const sumOfSquares = numbers.map(number => number*number).reduce((acc, cur) => acc + cur);
    const sum = numbers.reduce((acc, cur) => acc + cur);
    const squareOfSum = sum * sum;
    const result = squareOfSum - sumOfSquares;
    return result;
  }
  
sumSquareDifference(100);
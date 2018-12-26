//Project Euler: Problem 10: Summation of primes
function primeSummation(n) {
    const isPrime = num => {
        for(let i = 2; i < num; i++)
        if(num % i === 0) 
            return false;
        return num !== 1 && num !== 0 ? num : false;
    }
    let count = 2;
    let resultArr = [];
    do {
        isPrime(count) !== false ? resultArr.push(count) : "";
        count += 1;
    } while (count < n);
    return resultArr.reduce((acc, cur) => acc + cur);
}
  
primeSummation(17);
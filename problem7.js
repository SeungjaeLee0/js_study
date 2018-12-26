//Project Euler: Problem 7: 10001st prime
function nthPrime(n) {
    const isPrime = num => {
        for(let i = 2; i < num; i++)
        if(num % i === 0) 
            return false;
        return num !== 1 && num !== 0 ? num : false;
    }
    let count = 1;
    let resultArr = [];
    do {
        count += 1;
        isPrime(count) !== false ? resultArr.push(count) : "";
    } while (resultArr.length < n);
    return resultArr[resultArr.length-1];
}

nthPrime(100);
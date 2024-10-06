const fibonacciSeries = (num) =>{
    const res = [0,1];
    for(let i=2; i<num; i++){
        res[i] = res[i-2] + res[i-1];
    }
    return res;
}

// console.log(fibonacciSeries(5))

//Factorial

const factorial = (n) =>{
    let result = 1;
    for(let i=2; i<=n; i++){
        result = result * i;
    }
    return result
}

// console.log(factorial(5))

const isPrime = (n) =>{
    for (let i=2; i<n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

// console.log(isPrime(5))

const isPowerofTwo = (n) =>{
    if(n < 1) return false;

    while(n > 1){
        if(n % 2 !== 0) {return false};
        n = n/2;
    }
    return true
}

// console.log(isPowerofTwo(1),'1')
// console.log(isPowerofTwo(2),'2')
// console.log(isPowerofTwo(5),'3')
// console.log(isPowerofTwo(6382372162),'4')

//Recursive Fibonacci

const isRecursiveFibonacci = (n) =>{
    if( n < 2) return n;

    return isRecursiveFibonacci(n-1) + isRecursiveFibonacci(n-2)
}

// console.log(isRecursiveFibonacci(5))

const isRecursiveFactorial = (n) =>{
    if( n === 0) return 1;
    return n * isRecursiveFactorial(n-1)
}

// console.log(isRecursiveFactorial(5))
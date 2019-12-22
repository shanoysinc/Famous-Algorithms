// Write a recursive function called fib which accepts a number and returns the
// nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is
// the sequence of whole numbers 1,1,2,3,5,8, ... which starts with 1 and 1, and
// where every number thereafter is equal to the sum of the previous two numbers

function fib(num) {
    let sum = 0;
    if (num % 2 == 0) {
        sum += num;
    }

    if (num === 2 || num == 1) {
        console.log(sum);
        return 1;
    } else {
        return fib(num - 1) + fib(num - 2);
    }
}

fib(4000000); // 3  // 0,1,1,2,3
fib(10); // 55
fib(28); // 317811
fib(35); // 9227465

console.log(fib(10));

// Memoization fib
const cache = {};
const fibonacci = function(n) {
    if (n in cache) {
        return cache[n];
    }
    if (n <= 1) {
        return n;
    }
    const value = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = value;
    return value;
};

console.log(fibonacci(60));
fibonacci(40);
fibonacci(10);

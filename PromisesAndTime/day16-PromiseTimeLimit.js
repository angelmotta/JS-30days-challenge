/**
 * https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
The time limited function should follow these rules:
If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 
Example 1:

Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 50
Output: {"rejected":"Time Limit Exceeded","time":50}
Explanation:
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
   const res = await limited(...inputs)
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // Output

The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
Example 2:

Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 150
Output: {"resolved":25,"time":100}
Explanation:
The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.
Example 3:

Input: 
fn = async (a, b) => { 
  await new Promise(res => setTimeout(res, 120)); 
  return a + b; 
}
inputs = [5,10]
t = 150
Output: {"resolved":15,"time":120}
Explanation:
​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.
Example 4:

Input: 
fn = async () => { 
  throw "Error";
}
inputs = []
t = 1000
Output: {"rejected":"Error","time":0}
Explanation:
The function immediately throws an error.

 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

// Approach #1: using setTimeout and waiting for the result from fn (setTimeout is a source memory leak, see Approach #2)
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args)
                .then((result) => resolve(result))
                .catch((err) => reject(err));
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });
    };
};

// Approach #2: Improved version using clearTimeId to avoid memory leak issues
var timeLimit2 = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timerId = setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args)
                .then((result) => resolve(result))
                .catch((err) => reject(err))
                .finally(() => clearTimeout(timerId)); // avoid memory leaks
        });
    };
};

// Approach #3: using async/await keyword
var timeLimit3 = function (fn, t) {
    return async function (...args) {
        return new Promise(async (resolve, reject) => {
            const timerId = setTimeout(() => reject("Time Limit Exceeded"), t);
            try {
                const res = await fn(...args); // wait for the promise to be resolved (actual value)
                resolve(res);
            } catch (err) {
                reject(err); // not used in this example
            } finally {
                clearTimeout(timerId); // avoid memory leaks
            }
        });
    };
};

// Approach #4: using Promise.race(promise1, promise2)
var timeLimit4 = function (fn, t) {
    return async function (...args) {
        const promiseOriginalFn = fn(...args);

        const promiseTimer = new Promise((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });
        // fn Promise and promise2 competition
        return Promise.race([promiseOriginalFn, promiseTimer]);
    };
};

fn = async (n) => {
    const myres = await new Promise((res) => setTimeout(res, 100));
    return n * n;
};
inputs = [5];
t = 150;

const startFunc = async function () {
    const limited = timeLimit2(fn, t); // limited is async function
    const start = performance.now();
    let result;
    try {
        const res = await limited(...inputs);
        result = { resolved: res, time: Math.floor(performance.now() - start) };
    } catch (err) {
        result = { rejected: err, time: Math.floor(performance.now() - start) };
    }
    console.log(result); // Output
};

startFunc();

// https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function

 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */

// Approach: iteratively
var compose = function (functions) {
    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            const theFunc = functions[i];
            x = theFunc(x);
            console.log(x);
        }
        return x;
    };
};

// Approach #2: using Reducer
const compose2 = function (functions) {
    const mycallbackFunc = (acc, currentFunc) => currentFunc(acc);
    return function (x) {
        return functions.reduceRight(mycallbackFunc, x);
    };
};

const fn = compose2([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
//const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
// const fn = compose([]);
console.log(fn(4));

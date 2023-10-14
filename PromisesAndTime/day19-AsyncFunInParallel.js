/**
 * https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.
promise resolves:
When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:
When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.
 */

// Tests
// const t0 = performance.now();
// setTimeout(() => {
//     console.log("Delayed task");
//     const t1 = performance.now();
//     console.log(`Workload took ${t1 - t0} milliseconds.`);
// }, 3000);

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

// Approach #1: solution using callbacks with .then
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        let results = Array(functions.length).fill(0);
        let resolvedPromises = 0;
        for (let i = 0; i < functions.length; i++) {
            const promise = functions[i]();
            promise.then(
                (result) => {
                    results[i] = result;
                    resolvedPromises++;
                    if (resolvedPromises == functions.length) {
                        resolve(results);
                    }
                },
                (theError) => {
                    reject(theError);
                }
            );
            console.log("fire promise #", i);
        }
    });
};

// Approach #2: using async/await using forEach loop
// Note: forEach loop doesnt wait for await statement like normal for loop does
var promiseAll2 = function (functions) {
    return new Promise((resolve, reject) => {
        let results = Array(functions.length).fill(0);
        let resolvedPromises = 0;
        functions.forEach(async (func, idx) => {
            try {
                // console.log("fire promise #", idx);
                const val = await func();
                results[idx] = val;
                resolvedPromises++;
                if (resolvedPromises == functions.length) {
                    return resolve(results);
                }
            } catch (err) {
                return reject(err);
            }
        });
    });
};

// const promise = promiseAll([() => new Promise((res) => res(42))]);
// promise.then(console.log); // [42]

const func2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(111), 5000);
    });
};

const t0 = performance.now();
const promise = promiseAll2([func2, func2]);
promise.then(
    (result) => {
        console.log(result);
        const t1 = performance.now();
        console.log(`Workload took ${t1 - t0} milliseconds.`);
    },
    (theError) => {}
);
console.log("ejecutado");

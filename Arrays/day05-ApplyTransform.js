/**
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
 */

/**
 * Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// Approach #1: using for loop
var map = function (arr, fn) {
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
        const newElem = fn(arr[i], i);
        ans.push(newElem);
    }
    return ans;
};

const plusOne = function (n) {
    return n + 1;
};

// Approach #2: using Reduce method
var map2 = function (arr, fn) {
    return arr.reduce((resArray, currElem, idx) => {
        const transElem = fn(currElem, idx);
        resArray.push(transElem);
        return resArray;
    }, []);
};

const inList = [0, 1, 2];
const ans = map2(inList, plusOne);
console.log(ans);

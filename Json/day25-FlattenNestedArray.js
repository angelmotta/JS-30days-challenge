/**
 * https://leetcode.com/problems/flatten-deeply-nested-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
 Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
A flattened array is a version of that array with some or all of the sub-arrays removed and replaced 
with the actual elements in that sub-array. 
This flattening operation should only be done if the current depth of nesting is less than n. 
The depth of the elements in the first array are considered to be 0.
Please solve it without the built-in Array.flat method.
 */

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let res = [];
    function helper(arr, currDepth) {
        // Base case
        if (currDepth > n) {
            res.push(arr);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number") {
                res.push(arr[i]);
            } else {
                helper(arr[i], currDepth + 1);
            }
        }
    }

    helper(arr, 0);
    return res;
};

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 0;
// console.log(flat(arr, n));

arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 1;
// console.log(flat(arr, n));

arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [9, 10, 11], 12],
    [13, 14, 15],
];
n = 2;
console.log(flat(arr, n));

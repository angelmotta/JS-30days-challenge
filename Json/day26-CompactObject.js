/**
 * https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. 
This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.
Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
// Approach #1: my original implementation
var compactObject = function (obj) {
    let arrKeys = Object.keys(obj);
    let res = {};
    if (Array.isArray(obj)) {
        res = [];
    }
    for (const key of arrKeys) {
        if (Boolean(obj[key])) {
            if (Array.isArray(obj[key]) || typeof obj[key] === "object") {
                resObj = compactObject(obj[key]); // recursive call
                if (Array.isArray(res)) {
                    res.push(resObj);
                } else {
                    res[key] = resObj;
                }
            } else {
                if (Array.isArray(res)) {
                    res.push(obj[key]);
                } else {
                    res[key] = obj[key];
                }
            }
        }
    }
    return res;
};

let obj = [null, 0, false, 1];
// console.log(compactObject(obj));

obj = { a: 1, b: [false, 2], c: null, d: "d" };
// console.log(compactObject(obj));

obj = [null, 0, 5, [0], [false, 16]];
// console.log(compactObject(obj));

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
// Approach #2: using a base case and clearer DFS approach
compactObject = function (obj) {
    // Base case: return false or primitive data type
    if (Boolean(obj) === false) {
        // filter null Object and falsy values
        return false;
    }
    if (typeof obj !== "object") {
        // obj is a primitve data type (Number, string, etc...)
        return obj;
    }
    // obj is an Array or Object
    function dfs(obj) {
        // Handle Array type
        if (Array.isArray(obj)) {
            const arrData = [];
            for (const elem of obj) {
                const response = compactObject(elem); // recursive call
                if (response) {
                    // Valid non-falsy value
                    arrData.push(response);
                }
            }
            return arrData;
        }

        // Handle Object type
        const objData = {};
        for (const key in obj) {
            const response = compactObject(obj[key]);
            if (response) {
                objData[key] = response;
            }
        }
        return objData;
    }

    return dfs(obj);
};

obj = [null, 0, false, 1];
console.log(compactObject(obj));

obj = { a: 1, b: [false, 2], c: null, d: "d" };
console.log(compactObject(obj));

obj = [null, 0, 5, [0], [false, 16]];
console.log(compactObject(obj));

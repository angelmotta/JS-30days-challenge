/**
 * https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
The provided callback fn will accept an item in the array and return a string key.
The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
Please solve it without lodash's _.groupBy function.
 */

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const groupedObj = {};
    for (let i = 0; i < this.length; i++) {
        let elemArr = this[i];
        let myKey = fn(elemArr);
        if (!groupedObj[myKey]) {
            groupedObj[myKey] = [];
        }
        groupedObj[myKey].push(elemArr);
    }
    return groupedObj;
};

// Approach #2: using OR operator
Array.prototype.groupBy = function (fn) {
    const groupedObj = {};
    for (let i = 0; i < this.length; i++) {
        const elemArr = this[i];
        const myKey = fn(elemArr);
        const valArr = groupedObj[myKey] || [];
        valArr.push(elemArr);
        groupedObj[myKey] = valArr;
    }
    return groupedObj;
};

const res = [1, 2, 3].groupBy(String); // {"1":[1],"2":[2],"3":[3]}
//console.log(res);

let fn = function (item) {
    return item.id;
};
const array = [{ id: "1" }, { id: "1" }, { id: "2" }];
const res2 = array.groupBy(fn);
// console.log(res2);

const array2 = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9],
];
fn = function (list) {
    return String(list[0]);
};
const res3 = array2.groupBy(fn);
console.log(res3);

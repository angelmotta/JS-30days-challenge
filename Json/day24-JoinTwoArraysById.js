/**
 * https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays 
will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. 
The length of joinedArray should be the length of unique values of id. 
The returned array should be sorted in ascending order based on the id key.
If a given id exists in one array but not the other, the single object with that id should be included in the 
result array without modification.

If two objects share an id, their properties should be merged into a single object:
- If a key only exists in one object, that single key-value pair should be included in the object.
- If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 */

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
// Approach #1: sorting input arrays and then two pointers technique
// Time O(nlogn) | Space O(n)
var join = function (arr1, arr2) {
    const compareFn = (elem1, elem2) => {
        if (elem1.id < elem2.id) {
            return -1;
        } else if (elem1.id > elem2.id) {
            return 1;
        } else {
            return 0;
        }
    };
    arr1.sort(compareFn);
    arr2.sort(compareFn);
    // console.log(arr1);
    // console.log(arr2);
    let idxArr1 = 0;
    let idxArr2 = 0;
    const joinedArray = [];
    while (idxArr1 < arr1.length && idxArr2 < arr2.length) {
        if (arr1[idxArr1].id < arr2[idxArr2].id) {
            // console.log(arr1[idxArr1]);
            joinedArray.push(arr1[idxArr1]);
            idxArr1++;
        } else if (arr1[idxArr1].id > arr2[idxArr2].id) {
            // console.log(arr2[idxArr2]);
            joinedArray.push(arr2[idxArr2]);
            idxArr2++;
        } else {
            const mergedObj = {
                ...arr1[idxArr1],
                ...arr2[idxArr2],
            };
            // console.log(mergedObj);
            joinedArray.push(mergedObj);
            idxArr1++;
            idxArr2++;
        }
    }
    // check pending objects
    while (idxArr1 < arr1.length) {
        joinedArray.push(arr1[idxArr1]);
        idxArr1++;
    }
    while (idxArr2 < arr2.length) {
        joinedArray.push(arr2[idxArr2]);
        idxArr2++;
    }
    return joinedArray;
};

const arr1 = [
    { id: 7, x: 9 },
    { id: 1, x: 1 },
];
const arr2 = [
    { id: 3, x: 5 },
    { id: 7, x: 10 },
];

//console.log(join(arr1, arr2));

// Approach #2: no sort. Using Object Result to store the result then return values from the Object Result
// Time O(n) | Space O(n)
var join2 = function (arr1, arr2) {
    const objResult = {};
    arr1.forEach((elem) => {
        objResult[elem.id] = elem;
    });
    arr2.forEach((elem) => {
        if (objResult[elem.id]) {
            objElemArr1 = objResult[elem.id];
            const mergedObj = {
                ...objElemArr1,
                ...elem,
            };
            objResult[elem.id] = mergedObj;
        } else {
            objResult[elem.id] = elem; // key as integer insert in order way inside Object (as needed in this problem)
        }
    });
    return Object.values(objResult);
};

const res = join2(arr1, arr2);
console.log(res);

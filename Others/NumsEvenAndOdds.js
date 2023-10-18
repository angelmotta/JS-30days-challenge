// Experiment #1: mutate an array inside function
console.log("Experiment #1");
const arr = [1, 2, 3];
console.log(arr); // original array

// Mutate array inside function
function mutateArr(theArr) {
    theArr[1] = theArr[0];
    console.log(theArr); // mutated array even outside of this function
}

mutateArr(arr);
console.log(arr); // mutated array

// Experiment #2
console.log("Experiment #2");
function changeStuff(theNum, a, b) {
    theNum = theNum * 10; // change only 'in this scope' the value
    a.item = "changed"; // mutate property Object (even outside this function)
    b = { item: "changed" }; // change only 'in this scope' the reference to a new Object
}

let num = 10;
let objA = { item: "unchanged" };
let objB = { item: "unchanged" };

changeStuff(num, objA, objB);

console.log(num); // not changed
console.log(objA.item); // mutated
console.log(objB.item); // not changed

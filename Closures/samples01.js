// Functions within functions
function createAdderFunction() {
    function adderFunc(a, b) {
        const sum = a + b;
        return sum;
    }
    return adderFunc;
}

const myAdderFunc = createAdderFunction();
console.log(myAdderFunc(3, 4)); // 7

// Another closure example
function createAdder(a) {
	function f(b) {
		const sum = a + b;    // inner function has access to outer 'a'
		return sum;
	}
	return f;                  // return function
}

// Invocation
const f = createAdder(3)   // 3 is like a const number
console.log(f(4))          // 7
console.log(f(1))          // 4
console.log(f(1))          // 4

// Higher order Functions
function log(inputFunc) {
	return function(...args) {    // rest syntax (condense into array)
		console.log("Input:", args);
		const result = inputFunc(...args);
		console.log("Output:", result);
		return result;
	}
}


// Invocation
// Sample #1
const myFunc = log((a, b) => a + b)
myFunc(1, 2); // Input: [1, 2]   Output: 3

// Sample #2
const myMulFunc = (a, b) => a * b
const mulFunc = log(myMulFunc);
mulFunc(3, 4);
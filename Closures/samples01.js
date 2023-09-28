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
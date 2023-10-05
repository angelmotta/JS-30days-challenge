
### Functions
It's allowed return `nothing` and it will implicitly return `undefined`
```javascript
function f(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7
```


### Anonymous functions
You can exclude the `name` after the `function` keyword
```javascript
var f = function(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7
```


### Immediately Invoked Function Expression (IIFE)
```javascript
const result = (function(a, b) {
  const sum = a + b;
  return sum;
})(3, 4);              // inmodiately invoked function
console.log(result);   // 7
```

### Functions within functions

```js
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
```


### Functions hoisting
Only valid if it's used `function` keyword (invalid for `arrow functions`)

```javascript
function createFunction() {
  return f;                                 // hoisting
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
}
const f = createFunction();
console.log(f(3, 4)); // 7
```

### Closures
A closure is a function that remembers its outer variables because it has a `reference` to all declared variables around it, also known as `lexical environment` and this function can access them.
The combination of the `function` and its `environment` is called `closure`
Note: In JS all functions are closures

```js
function createAdder(a) {
	function f(b) {
		const sum = a + b;    // inner function has access to outer 'a'
		return sum;
	}
	return f;                  // return closure function
}

// Invocation
const f = createAdder(3)   // 3 is like a const number
console.log(f(4))          // 7
console.log(f(1))          // 4
console.log(f(1))          // 4
```

`createAdder()` serves as a `factory` of new functions with each returned function having a `different behavior`

See more: https://javascript.info/closure

### Arrow Functions
- No automatic `hoisting` (considered a good thing for readability)
- Arrow functions doesn't have their own `bindings` to `this`, `arguments` or `super` and should not be used as methods
- Arrow functions can not be used as `constructors`. Calling them with `new` throws a `TypeError`. No access to `new.target` keyword.
- Arrow functions can not use `yield` within their body and not be created as `generator functions`
```javascript
const f = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(f(3, 4)); // 7
```


### Rest arguments (...args)
The `rest` syntax `collects` multiples elements and `condenses` them into a `single` element (`array`)
So `rest` syntax allow access all passed arguments as an `array`

```javascript
function f(...args) {            // 'rest' syntax (condense into array)
  const sum = args[0] + args[1];
  return sum;
}
console.log(f(3, 4));           // Look how rest operator receive this
```

Spread syntax
`Spread` is the opposite of `rest`.  Spread syntax `expands an array`  into its `elements`
```js
function sum(x, y, z) {        // Expect individual variables
  return x + y + z;
}

const numbers = [1, 2, 3];     // array
console.log(sum(...numbers)); // 'expands' array into its elements (spread)
// Expected output: 6
```

Useful for `Generic Factory Functions`

### Higher order functions
A function that `accepts` a function and/or `returns` a function is called a _**higher-order function**_, and they are very common in JavaScript.
```js
function log(inputFunc) {
	return function(...args) {    // rest syntax (condense into array)
		console.log("Input:", args);
		const result = inputFunc(...args);
		console.log("Output:", result);
		return result;
	}
}
```

Invocation
```js
const f = log((a, b) => a + b)
f(1, 2); // Input: [1, 2]   Output: 3
```


I like the problem Optery is solving. As a user I am aware and cautious about giving out personal information because many times my data is misused. (I found it interesting, so I tried to sign up, but the product is currently focused on the US).
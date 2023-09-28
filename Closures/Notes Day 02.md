### Closure example

Scope ~ Lexical environment
```javascript
function createAdder(a) { // Functions works as a class constructor
  return function add(b) {
    const sum = a + b;
    return sum;
  }
}

const addTo2 = createAdder(2);
addTo2(5); // 7
```

### Closures vs Classes

Previous example `createAdder` works as a `constructor`
```javascript
class Adder {
  constructor(a) {
     this.a = a;
  }

  add(b) {
    const sum = this.a + b;
    return sum;
  }
}
const addTo2 = new Adder(2);
addTo2.add(5); // 7
```

- Both code examples allow you to pass in some `state` in a "constructor" and have "methods" that access this state.
- One key difference is that closures allow for true _**encapsulation**_. In the class example, there is nothing stopping you from writing `addTo2.a = 3;` However in the `closure` example is theoretically impossible to access `a` attribute (As of 2022 `#` prefix syntax making [private class members](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- Memory efficiency 
	- Classes approach (more memory efficient): even though creating many instances of a class, each instance stores a single reference to the `prototype object` where all methods are stored.
	- Closure approach: all the `methods` are generated and a `copy` of each is stored in memory each time the `factory function` is called.


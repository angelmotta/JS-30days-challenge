/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    return {
        state: init,
        increment() {
            return ++this.state;
        },
        decrement() {
            return --this.state;
        },
        reset() {
            this.state = init;
            return this.state;
        },
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// Class based solution
class Counter {
    constructor(init) {
        this.initVal = init;
        this.state = init;
    }

    increment() {
        return ++this.state;
    }

    decrement() {
        return --this.state;
    }

    reset() {
        this.state = this.initVal;
        return this.state;
    }
}

var createCounterII = function (init) {
    return new Counter(init);
};

const counter = createCounterII(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());

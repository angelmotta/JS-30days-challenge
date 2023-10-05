/**
 * @return {Function}
 */
const createHelloWorld = function() {
    const msg = "Hello World"
    return function(...args) {
        return msg
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
/**
 * @param {string} val
 * @return {Object}
 */

class CustomToBeError extends Error {
    constructor(message) {
        super(message);
        this.name = "error";
    }
}

var expect = function (val) {
    const myObj = {
        val: val,
        posResponse: {
            value: true,
        },
        errToBeRes: {
            error: "Not Equal",
        },
        errNotToBeRes: {
            error: "Equal",
        },
        toBe(someVal) {
            const myerr = new CustomToBeError("Not Equal");
            return this.val === someVal ? this.posResponse : myerr;
        },
        notToBe(someVal) {
            const myerr = new CustomToBeError("Equal");
            return this.val !== someVal ? this.posResponse : myerr;
        },
    };
    return myObj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
console.log(expect(5).notToBe(null));
console.log(expect(5).toBe(undefined));

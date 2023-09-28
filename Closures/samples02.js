function createAdder(a) { // Functions works as a class constructor
    return function add(b) {
      const sum = a + b;
      return sum;
    }
  }
  
const addTo2 = createAdder(2);
console.log(addTo2(5)); // 7

class Adder {
    constructor(a) {
        this.a = a;
    }

    add(b) {
        const sum = this.a + b;
        return sum;
    }
}

const myAddTo2 = new Adder(3);
console.log(myAddTo2.add(5)); // 8
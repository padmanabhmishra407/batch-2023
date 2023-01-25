// AccessModfs.js
class ClassWithPrivateField {
    #privateField;

    constructor() {
        this.#privateField = 42; // private field
    }
}
// let Parentclass = new ClassWithPrivateField();

class SubClass extends ClassWithPrivateField {
    #subPrivateField;

    constructor() {
        super();
        this.#subPrivateField = 23;
    }
}

new SubClass();

// let sub = new SubClass(); //instance

// console.log(sub, Parentclass);
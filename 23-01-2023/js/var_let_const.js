//var
//var declarations are globally scoped or function/locally scoped.

var varVariable = "varVariable"; // global scope
console.log(varVariable);
(function () {
    var varVariable2 = "varVariable2"; //function scope
    console.log(varVariable2);
})();
var varVariable = "varVariableRedeclared"; //var allows redeclaration of same variables
console.log(varVariable);

//let
//A block is a chunk of code bounded by {}.

let test = true;

if (test) {
    let letVariable = "letVariable";
    let test = false; // redeclaring variables with same names under different scopes is allowed
    console.log(test)
    console.log(letVariable);
}
let test = false; //redeclaring variables in the same scope is not allowed in let

console.log(letVariable); // will throw an error as "letVariable" has no scope here / "letVariable" dosen't exists in the global scope)

//const
//Variables declared with the const maintain constant values.
//const declaritations are similar to let declaritations
// const cannot be updated or re-declared

const greeting = "say Hi";//value of a variable declared with const remains the same within its scope
greeting = "say Hello instead";// error: Assignment to constant variable.

const greeting2 = {
    message: "say Hi",
    times: 4
}// a const object cannot be updated, but the properties of this objects can be updated.
greeting2.message = "Hello";
console.log(greeting2);

//ERROR
greeting2 = {
    words: "Hello",
    number: "five"
} // error:  Assignment to constant variable.
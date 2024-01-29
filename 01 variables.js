let x = 5; // Mutable variable
const y = 10; // Immutable constant
// var z = 15; // Mutable variable




// let 
if (true) {
    let localVar = 'I am block-scoped';
    console.log(localVar); // Outputs: 'I am block-scoped'
}

console.log(localVar); // ReferenceError: localVar is not defined


// const
const constantVar = 'I am a constant';
console.log(constantVar); // Outputs: 'I am a constant'

// Attempting to reassign a new value will result in an error
constantVar = 'Trying to change'; // TypeError: Assignment to constant variable



// // var
// function exampleFunction() {
//     if (true) {
//         var functionScopedVar = 'I am function-scoped';
//         console.log(functionScopedVar); // Outputs: 'I am function-scoped'
//     }

//     console.log(functionScopedVar); // Outputs: 'I am function-scoped'
// }

// console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined


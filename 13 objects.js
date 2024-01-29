// Creating an object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    },
    hobbies: ['reading', 'coding', 'traveling'],
    isStudent: false
};

// Accessing properties
console.log(person.firstName); // Outputs: John
console.log(person.address.city); // Outputs: Anytown
console.log(person.hobbies[1]); // Outputs: coding

// Adding a new property
person.gender = 'Male';

// Modifying a property
person.age = 31;

// Deleting a property
delete person.isStudent;

// Looping through object properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object methods
const keys = Object.keys(person);
console.log(keys); // Outputs: ['firstName', 'lastName', 'age', 'address', 'hobbies', 'gender']

const values = Object.values(person);
console.log(values); // Outputs: ['John', 'Doe', 31, { ... }, ['reading', 'coding', 'traveling'], 'Male']

const entries = Object.entries(person);
console.log(entries);
// Outputs:
// [['firstName', 'John'], ['lastName', 'Doe'], ['age', 31], ['address', { ... }], ['hobbies', ['reading', 'coding', 'traveling']], ['gender', 'Male']]

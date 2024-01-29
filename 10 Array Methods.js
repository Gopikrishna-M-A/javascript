// map
const numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);
console.log(squared);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// find
const found = numbers.find(num => num === 2);
console.log(found);

// map()

// Creates a new array by applying a function to each element of the original array.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// filter()

// Creates a new array with all elements that pass a certain condition.

const ages = [10, 15, 18, 21, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [18, 21, 30]

// reduce()

// Reduces the array to a single value by applying a function to each element (accumulator pattern).

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 10

// find()

// Returns the first element that matches the condition.

const students = [{name: 'John', age: 18}, {name: 'Jane', age: 16}];
const adult = students.find(student => student.age >= 18);
console.log(adult); // Output: { name: 'John', age: 18 }

// every()

// Checks if all elements satisfy a condition.

const scores = [85, 90, 78, 88];
const allPassed = scores.every(score => score >= 50);
console.log(allPassed); // Output: true

// some()

// Checks if at least one element satisfies a condition.


const scores = [45, 30, 78, 88];
const hasFailed = scores.some(score => score < 50);
console.log(hasFailed); // Output: true

// Advanced String Methods
// includes()

// Checks if the string contains a specified substring.

const phrase = "JavaScript is awesome!";
console.log(phrase.includes("awesome")); // Output: true

// startsWith() and endsWith()

// Checks if the string starts or ends with a specified substring.

const fileName = "example.txt";
console.log(fileName.startsWith("ex")); // Output: true
console.log(fileName.endsWith(".txt")); // Output: true

// slice()

// Extracts a section of a string and returns it as a new string.

const text = "Hello, world!";
const greeting = text.slice(0, 5);
console.log(greeting); // Output: Hello

// repeat()

// Repeats the string a specified number of times.

const word = "Hi ";
console.log(word.repeat(3)); // Output: Hi Hi Hi 

// split()

// Splits a string into an array of substrings based on a specified delimiter.

const csv = "apple,banana,orange";
const fruits = csv.split(",");
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// trim()

// Removes whitespace from both ends of the string.

const userInput = "   hello   ";
console.log(userInput.trim()); // Output: "hello"
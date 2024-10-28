// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);
Array.prototype.sum = function() {
return this.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum()); 

String.prototype.capitalize = function() {
return this.charAt(0).toUpperCase() + this.slice(1);
};

let greeting = "hello world!";
console.log(greeting.capitalize()); 

Object.prototype.toKeyValueArray = function() {
return Object.entries(this);
};

let person = { name: "Alice", age: 30, city: "New York" };
console.log(person.toKeyValueArray());

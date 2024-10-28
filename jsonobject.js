const data = [
    { name: "Alice", age: 30, isStudent: false },
    { name: "Bob", age: 25, isStudent: true }
  ];
  const jsonString = JSON.stringify(data);
  console.log(jsonString);

// const jsonString = '[{"name": "Alice", "age": 30, "isStudent": false}]';
// const data = JSON.parse(jsonString);
// console.log(data);

//crud opertaion on json object

let user = [
    {
        "name": "John",
        "age": 30,
        "isStudent": false
    },
    {
        "name": "Alice",
        "age": 25,
        "isStudent": true
    },
    {
        "name": "Bob",
        "age": 23,
        "isStudent": false
    }
]

//create
let newUser = {"name": "jahanvi", "age":24, "isStudent": false};
user.push(newUser);
console.log(user);
//read
console.log(user[0]);

// Finding a user by ID
let user1 = user.find(u => u.name === "jahanvi");
console.log(user1);

// Getting all users over 30 years old
let olderUsers = user.filter(u => u.isStudent == false);
console.log(olderUsers);

//Update 
let index = user.findIndex(u => u.name === "jahanvi");
if (index !== -1) {
  user[index].name = "Robert";
  user[index].age = 26;
}
console.log('update:', user);

//delete
let deleteIndex = user.findIndex(u => u.name === "John");
if (deleteIndex !== -1) {
  user.splice(deleteIndex, 1);
}
console.log(user);

// Alternatively, remove by creating a new array using `.filter()`
user = user.filter(u => u.name !== 'Bob'); // Removes the user with ID 1
console.log(user);
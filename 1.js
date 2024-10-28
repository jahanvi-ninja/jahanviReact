class Animal{
  constructor(name , bread){
  this.name = name;    
  }
  
  speak(){
      console.log(`${this.name} speaks`);
  }
}
class dog extends Animal{
  speak(){
      console.log(`${this.name} barks`);

  }
}
Object.defineProperties(Animal, {
age: {
  value: 42,
  writable: true,
},
property2: {},
});

console.log(Animal.age);
var rex = new dog('rex');
rex.speak();

rex.age = 3;
console.log(rex.age , Animal.age);

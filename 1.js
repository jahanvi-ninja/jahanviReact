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
property1: {
  value: 42,
  writable: true,
},
property2: {},
});

console.log(Animal.property1);
var rex = new dog('rex');
rex.speak();

dog.property1 = 3;
console.log(dog.property1 , Animal.property1);
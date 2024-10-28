class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Rex');
  dog.speak(); 


  new Date(); //the JavaScript Date() method
  //overriding the JavaScript Date() method
  function Date(){
  this.date = "This method overrides the default constructor of Date class.";
  };
  var date2 = new Date();
  console.log(date2);
  
  //Calculate area of rectangle
function calculateArea(x, y){
return x*y;
}
//Calculate area of square
function calculateArea(a){
return a*a;
}
console.log("Area of rectangle 2x3 is : " + calculateArea(2, 3));
console.log("Area of square 5x5 is : " + calculateArea(5));


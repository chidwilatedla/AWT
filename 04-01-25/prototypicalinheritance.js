function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.sayHello = function() {
    console.log(`${this.name} says hello!`);
  };
  

  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;

  Dog.prototype.bark = function() {
    console.log(`${this.name} barks!`);
  };

  const animal = new Animal('Generic Animal');
  const dog = new Dog('john', 'German Shepherd');
  
  animal.sayHello(); 
  dog.sayHello();    
  dog.bark();       
  
  
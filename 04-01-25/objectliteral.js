
const person = {
    name: "Alice",
    age: 18,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person.name);  
console.log(person.age);   

person.greet();  
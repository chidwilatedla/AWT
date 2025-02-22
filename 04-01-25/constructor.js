function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getInfo = function() {
        console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    };
}

const car1 = new Car("Honda", "Civic", 2022);
const car2 = new Car("Ford", "Mustang", 2021);


car1.getInfo(); 
car2.getInfo(); 
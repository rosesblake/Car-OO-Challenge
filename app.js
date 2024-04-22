// part 1

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."

// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."

// part two
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }
  numWheels() {
    return 4;
  }
}
let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk(); // "Beep."
myFirstCar.numWheels; // 4

// part three
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }
  numWheels() {
    return 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk(); // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels; // 2

//part four
class Garage {
  constructor(cap) {
    this.cap = cap;
    this.vehicles = [];
  }
  add(x) {
    if (x instanceof Vehicle === false) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.legnth >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(x);
    return "Vehicle added!";
  }
}
let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."

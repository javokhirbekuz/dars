const moment = require("moment");
const Car = require("./calculate");
const time = moment().format("HH:mm:ss");

const myCar = new Car("Toyota", "Camry", "white", 2025);
myCar.getInfo();
const yourCar = new Car("Tesla", "Model S", "black", 2023);
yourCar.getInfo();

// console.log("time:", time);
const person = (a, b) => {
    console.log(a + b);
};

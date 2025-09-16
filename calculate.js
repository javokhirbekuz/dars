const moment = require("moment");
class Car {
    constructor(brand, name, color, year) {
        this.brand = brand;
        this.name = name;
        this.color = color;
        this.year = year;
    }

    getInfo() {
        console.log(`Bu ${this.brand} ${this.name} made in ${this.year}`);
    }
}

module.exports = Car;

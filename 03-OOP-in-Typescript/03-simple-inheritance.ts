class Vehicle {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    drive(): string {
        return `Driving a ${this.brand}`;
    }
}

class Car extends Vehicle {
    model: string;

    constructor(brand: string, model: string) {
        super(brand);
        this.model = model;
    }

    override drive(): string {
        return super.drive() + ` ${this.model}`;
    }
}

const car = new Car('Toyota', 'Corolla');
console.log(car.drive()); // Driving a Toyota Corolla

// The base class also works independently
const vehicle = new Vehicle('Honda');
console.log(vehicle.drive()); // Driving a Honda
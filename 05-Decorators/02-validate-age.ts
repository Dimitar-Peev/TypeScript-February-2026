function validateAge(target: any, propertyName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalSet = descriptor.set!;

    descriptor.set = function (newAge: number) {
        if (newAge < 1 || newAge > 200) {
            throw new Error('Age must be between 1 and 200');
        }

        originalSet!.call(this, newAge);
    }

    return descriptor;
}

class Age {
    private _age!: number;

    constructor(age: number) {
        this.age = age;
    }

    @validateAge
    set age(val: number) {
        this._age = val;
    }

    get age() {
        return this._age;
    }
}

let ageVal = new Age(10);
console.log(ageVal.age);
ageVal.age = -10; // Error: Age must be between 1 and 200
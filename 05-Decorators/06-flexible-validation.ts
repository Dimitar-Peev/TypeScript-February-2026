function validateName(minLength: number) {
    return function (target: object, propertyName: string, descriptor: PropertyDescriptor) {
        const originalSet = descriptor.set!;

        descriptor.set = function (value: string) {
            if (value.length < minLength) {
                throw new Error(`name must have a min length of ${minLength} characters`);
            }

            originalSet.call(this, value);
        }

        return descriptor;
    }
}

function validateAge(min: number, max: number) {
    return function (target: object, propertyName: string, descriptor: PropertyDescriptor) {
        const originalSet = descriptor.set!;

        descriptor.set = function (value: number) {
            if (value < min || value > max) {
                throw new Error(`age must be between ${min} and ${max}`);
            }

            originalSet.call(this, value);
        }

        return descriptor;
    }
}

function validatePassword(pattern: RegExp) {
    return function (target: object, propertyName: string, descriptor: PropertyDescriptor) {
        const originalSet = descriptor.set!;

        descriptor.set = function (value: string) {
            if (!value.match(pattern)) {
                throw new Error(`password needs to match ${pattern}`);
            }

            originalSet.call(this, value);
        }

        return descriptor;
    }
}

class User {
    private _name!: string;
    private _age!: number;
    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    @validateName(3)
    set name(val: string) {
        this._name = val;
    }

    @validateAge(1, 100)
    set age(val: number) {
        this._age = val;
    }

    @validatePassword(/^[a-zA-Z0-9]+$/g)
    set password(val: string) {
        this._password = val;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

// minLength = 3
// min = 1, max = 100
// regex = /^[a-zA-Z0-9]+$/g
// let user = new User('John', 130, 'hardPassword12'); // Error: age must be between 1 and 100
// let user2 = new User('John', 30, '!test'); // Error: password needs to match /^[a-zA-Z0-9]+$/g
// let user3 = new User('John', 25, '@werty'); // Error: password needs to match /^[a-zA-Z0-9]+$/g
// let user4 = new User('Jo', 20, 'password123'); // Error: name must have a min length of 3 characters

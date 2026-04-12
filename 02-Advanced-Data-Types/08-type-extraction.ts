type NamesObj = {
    fName: string;
    lName: string;
    age: number;
    getPersonInfo(): string;
};

type LocationObj = {
    city: string;
    street: string;
    number: number;
    postalCode: number;
    getAddressInfo(): string;
};

type Combined = NamesObj & LocationObj;

function createCombinedFunction(names: NamesObj, location: LocationObj) {
    return function (person: Combined) {
        console.log(`Hello, ${person.getPersonInfo()} from ${person.getAddressInfo()}`);
    };
}

let names = {
    fName: 'John', lName: 'Doe', age: 22,
    getPersonInfo() {
        return `${this.fName} ${this.lName}, age ${this.age}`;
    }
};

let location = {
    city: 'Boston', street: 'Nowhere street', number: 13, postalCode: 51225,
    getAddressInfo() {
        return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
    }
};

let combinedFunction = createCombinedFunction(names, location);
let combinedPerson = Object.assign({}, names, location);
combinedFunction(combinedPerson);
// Hello, John Doe, age 22 from Nowhere street 13, Boston 51225
type Choose<T, K extends keyof T> = {
    [key in K]: T[key];
}

// T -> test
// K -> name | age
type test = {
    name: string,
    age: number,
    test: () => string;
}

type nameAndAge = 'name' | 'age';
type extracted = Choose<test, nameAndAge>;
// type extracted = {
//   name: string,
//   age: number
// }


// T -> anotherType
// K -> time | duration | test | val | user
type anotherType = {
    time: Date,
    duration: number,
    test: () => string,
    val: 200 | 300,
    user: {
        name: string,
        age: number
    }
}

type nestedUserAndTime = 'user' | 'time';
type extracted2 = Choose<anotherType, nestedUserAndTime>;

// type extracted2 = {
//   user: {
//     name: string;
//     age: number;
//   };
//   time: Date;
// }



type FunctionKeys<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type AllFunctions<T> = Pick<T, FunctionKeys<T>>;

// Input 1
type test = {
    name: string,
    age: number,
    test: () => string;
}
type extracted = AllFunctions<test>
// type extracted = {
//     test: () => string;
// }

// Input 2
type Employee = {
    name: string,
    salary: number,
    work: () => void,
    takeBreak: () => string
};
type extracted2 = AllFunctions<Employee>;
// type extracted2 = {
//     work: () => void;
//     takeBreak: () => string;
// }

// Input 3
type Nope = { name: string }
type extracted3 = AllFunctions<Nope>
// type extracted3 = {}
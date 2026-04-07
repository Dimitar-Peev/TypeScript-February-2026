function formatPerson(tuple: [string, number]): string {
    return `Hello, my name is ${tuple[0]} and my age is ${tuple[1]}`;
}

console.log(formatPerson(["Ivan", 20])); // Output: Hello, my name is Ivan and my age is 20
console.log(formatPerson(["Joro", 30])); // Output: Hello, my name is Joro and my age is 30
// console.log(formatPerson(["Ivan", 20, "Ivanov"])); // TS Error - too many elements
// console.log(formatPerson(["Joro", '25'])); // TS Error - second element must be number
// console.log(formatPerson([])); //TS Error - missing elements
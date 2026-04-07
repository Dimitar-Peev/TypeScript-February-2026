function isNonEmptyStringArray(arg: unknown): arg is string[] {
    return Array.isArray(arg) && arg.length > 0 && arg.every(element => typeof element === 'string');
}

// let arr: unknown = ['test', 123]; // Output: "" false
let arr: unknown = ['a', 'b', 'c']; // Output: 3 true
const result = isNonEmptyStringArray(arr);
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length, result);
} else {
    console.log('""', result);
}

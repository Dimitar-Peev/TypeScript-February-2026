function multiply(
    a?: number | string,
    b?: number | string,
    c?: number | string
): number {
    let numbers = [a, b, c]
        .filter(item => item !== undefined)
        .map(Number);

    return numbers.reduce((acc, curr) => acc * curr, 1);
}

console.log(multiply('3', 5, '10'));        // 150
console.log(multiply('2', '2'));            // 4
console.log(multiply(undefined, 2, 3));     // 6
console.log(multiply(7, undefined, '2'));   // 14
console.log(multiply());                    // 1
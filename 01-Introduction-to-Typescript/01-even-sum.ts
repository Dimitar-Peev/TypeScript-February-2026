function isEvenSum(a: number, b: number, c: number): boolean {
    return (a + b + c) % 2 === 0;
}

console.log(isEvenSum(1, 2, 3)); // Output: true
console.log(isEvenSum(2, 2, 3)); // Output: false
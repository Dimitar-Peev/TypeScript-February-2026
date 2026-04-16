function swap<T>(a: T[], aIndex: number, b: T[], bIndex: number): void {
    const temp = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = temp;
}

let a = ['test', '123'];
let b = ['a', 'b', 'c'];
swap<string>(a, 0, b, 2);
console.log(a); // ['c', '123']
console.log(b); // ['a', 'b', 'test']

let c = [20, 30, 40];
let d = [1, 2, 3, 4, 5];
swap<number>(c, 0, d, 2);
console.log(c); // [3, 30, 40]
console.log(d); // [1, 2, 20, 4, 5]

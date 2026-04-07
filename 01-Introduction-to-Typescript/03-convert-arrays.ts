function convertArray(arr: string[]): [string, number] {
    const concatenatedString = arr.join('');
    return [concatenatedString, concatenatedString.length];
}

console.log(convertArray(['How', 'are', 'you?'])); // Output: ['Howareyou?', 10]
console.log(convertArray(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript'])); // Output: ['Today is a nice day for TypeScript', 31]
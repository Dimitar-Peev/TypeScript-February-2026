enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function printNumberOrError(day: string): void {
    const index = Days[day as keyof typeof Days];
    console.log(index ?? 'error');
}

printNumberOrError('Monday');  // 1
printNumberOrError('Friday');  // 5
printNumberOrError('Invalid'); // error
const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function fridayThe13th(arr: unknown[]): void {
    for (const element of arr) {
        if (element instanceof Date && !isNaN(element.getTime())) {
            if (element.getDate() === 13 && element.getDay() === 5) {
                const day = element.getDate();
                const month = MONTH_NAMES[element.getMonth()];
                const year = element.getFullYear();
                console.log(`${day}-${month}-${year}`);
            }
        }
    }
}

console.log("\n=== Friday the 13th ===");
fridayThe13th([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13), // June 2025 -> Friday the 13th
    '13-09-2023',
    new Date(2025, 6, 13),
]);
// Output: 13-June-2025

console.log("---");
fridayThe13th([
    new Date(2024, 0, 13),
    new Date(2024, 1, 13),
    new Date(2024, 2, 13),
    new Date(2024, 3, 13),
    new Date(2024, 4, 13),
    new Date(2024, 5, 13),
    new Date(2024, 6, 13),
    new Date(2024, 7, 13),
    new Date(2024, 8, 13),  // September 2024 -> Friday the 13th
    new Date(2024, 9, 13),
    new Date(2024, 10, 13),
    new Date(2024, 11, 13), // December 2024 -> Friday the 13th
]);
// Output: 13-September-2024
// Output: 13-December-2024
enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayOfTheWeek(day: number): string  {
    return Days[day] || 'error';
}

console.log(getDayOfTheWeek(1));   // 'Monday'
console.log(getDayOfTheWeek(5));   // 'Friday'
console.log(getDayOfTheWeek(-1));  // 'error'
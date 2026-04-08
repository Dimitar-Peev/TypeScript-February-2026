function dayOfTheWeek(day: number): void {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(Days[day] || 'error');
}

dayOfTheWeek(1);   // 'Monday'
dayOfTheWeek(5);   // 'Friday'
dayOfTheWeek(-1);  // 'error'
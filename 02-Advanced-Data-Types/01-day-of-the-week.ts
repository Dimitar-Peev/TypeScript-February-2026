function getDayOfTheWeek(day: number): void {
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

getDayOfTheWeek(1);   // 'Monday'
getDayOfTheWeek(5);   // 'Friday'
getDayOfTheWeek(-1);  // 'error'
function reverseDayOfTheWeek(day: string): void {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(Days[day as keyof typeof Days] ?? 'error');
}

reverseDayOfTheWeek('Monday'); // 1
reverseDayOfTheWeek('Friday'); // 5
reverseDayOfTheWeek('Invalid'); // error
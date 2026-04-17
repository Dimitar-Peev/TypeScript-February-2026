enum TravelVacation {
    Abroad = 'Abroad',
    InCountry = 'InCountry'
}

enum MountainVacation {
    Ski = 'Ski',
    Hiking = 'Hiking'
}

enum BeachVacation {
    Pool = 'Pool',
    Sea = 'Sea',
    ScubaDiving = 'ScubaDiving'
}

interface Holiday {
    set start(val: Date);

    set end(val: Date);

    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;

    listReservations(): string;
}

type AnyVacation = TravelVacation | MountainVacation | BeachVacation;

class PlannedHoliday implements Holiday {
    private _start: Date;
    private _end: Date;

    constructor(start: Date, end: Date) {
        this._start = start;
        this._end = end;
    }

    set start(val: Date) {
        if (val > this._end) {
            throw new Error('End date cannot be before start date!');
        }

        this._start = val;
    }

    set end(val: Date) {
        if (val < this._start) {
            throw new Error('End date cannot be before start date!');
        }

        this._end = val;
    }

    getInfo(): string {
        return `Holiday ${this.formatDate(this._start)} - ${this.formatDate(this._end)}`;
    }

    private formatDate(date: Date): string {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}

class HolidayManager<T extends Holiday, V extends AnyVacation> implements VacationManager<T, V> {
    private reservations: Map<T, V> = new Map();

    reserveVacation(holiday: T, vacationType: V): void {
        this.reservations.set(holiday, vacationType);
    }

    listReservations(): string {

        let result = [];
        const vacationEntries = Array.from(this.reservations.entries());

        for (const [holiday, vacationType] of vacationEntries) {
            result.push(`${holiday.getInfo()} => ${vacationType}`);
        }

        return result.join('\n');
    }
}

let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
let holidayManager = new HolidayManager<Holiday, TravelVacation>();
holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
console.log(holidayManager.listReservations());
console.log('-'.repeat(47))
let holiday3 = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
let holiday4 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
let holidayManager2 = new HolidayManager<Holiday, BeachVacation>();
holidayManager2.reserveVacation(holiday3, BeachVacation.ScubaDiving);
holidayManager2.reserveVacation(holiday4, BeachVacation.Sea);
console.log(holidayManager2.listReservations());

let holiday5 = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday6 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2024, 3, 17));
let holidayManager3 = new HolidayManager<Holiday, MountainVacation>();
// holidayManager3.reserveVacation(holiday5, BeachVacation.ScubaDiving); // TS errors: BeachVacation.ScubaDiving not assignable to MountainVacation
// holidayManager3.reserveVacation(holiday6, TravelVacation.InCountry); // TS errors: TravelVacation.InCountry not assignable to MountainVacation
console.log(holidayManager3.listReservations());




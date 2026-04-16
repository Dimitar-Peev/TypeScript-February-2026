interface CountableSet<T> {
    add(item: T): void;

    remove(item: T): void;

    contains(item: T): boolean;

    getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
    private items: Map<T, number> = new Map();

    private getCount(item: T): number {
        return this.items.get(item) ?? 0;
    }

    private setCount(item: T, count: number): void {
        this.items.set(item, count);
    }

    add(item: T): void {
        this.setCount(item, this.getCount(item) + 1);
    }

    remove(item: T): void {
        const currentCount = this.getCount(item);

        if (currentCount > 0) {
            this.setCount(item, currentCount - 1);
        }
    }

    contains(item: T): boolean {
        return this.getCount(item) > 0;
    }

    getNumberOfCopies(item: T): number {
        return this.getCount(item);
    }
}

// Input 1
let countedSet = new CountedSet<string>();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.contains('test')); // true
console.log(countedSet.getNumberOfCopies('test')); // 2
countedSet.remove('test')
countedSet.remove('test')
countedSet.remove('test')
console.log(countedSet.getNumberOfCopies('test')); // 0
console.log(countedSet.contains('test')); // false

// Input 2
let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();
codesCounterSet.add(404);
codesCounterSet.add(200);
console.log(codesCounterSet.contains(404)); // true
console.log(codesCounterSet.getNumberOfCopies(404)); // 1
console.log(codesCounterSet.getNumberOfCopies(200)); // 1
// codesCounterSet.add(205); // TS Error: argument '205' not assignable to type
// codesCounterSet.getNumberOfCopies(350); // TS Error: argument '350' not assignable to type

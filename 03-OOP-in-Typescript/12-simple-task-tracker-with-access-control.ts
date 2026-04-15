class Task {
    public title: string;
    public description: string;
    public completed: boolean = false;
    private _createdBy: string;

    constructor(title: string, description: string, createdBy: string) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }

    get createdBy(): string {
        return this._createdBy;
    }

    toggleStatus(): void {
        this.completed = !this.completed;
    }

    getDetails(): string {
        const status = this.completed ? 'Completed' : 'Pending';
        return `Task: ${this.title} - ${this.description} - ${status}`;
    }

    static createSampleTasks(): Task[] {
        return [
            new Task('Buy groceries', 'Milk, eggs, bread', 'Alice'),
            new Task('Read book', 'Finish the TypeScript handbook', 'Bob'),
        ];
    }
}

// Example 1
const task1 = new Task('Complete homework', 'Finish math exercises', 'Charlie');
task1.toggleStatus();
console.log(task1.getDetails()); // Task: Complete homework - Finish math exercises - Completed

// Example 2
const task2 = new Task('Clean room', 'Clean the room', 'Mary');
console.log(task2.getDetails()); // Task: Clean room - Clean the room - Pending

// Example 3
const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));
// Task: Buy groceries - Milk, eggs, bread - Pending
// Task: Read book - Finish the TypeScript handbook - Pending

// Getter
console.log(task1.createdBy); // Charlie
// task1._createdBy = 'Hacker';  // Error: Property '_createdBy' is private
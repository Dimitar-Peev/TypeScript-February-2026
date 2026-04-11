export { }

type TaskStatus = 'Logged' | 'Started' | 'InProgress' | 'Done';

interface IUser {
    username: string;
    signupDate: Date;
};

interface ITask {
    status: TaskStatus;
    title: string;
    daysRequired: number;
    assignedTo: IUser | undefined;
    changeStatus(newStatus: TaskStatus): void;
}

function assignTask(user: IUser, task: ITask) {
    if (task.assignedTo == undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}

let user = {
    username: 'Margaret',
    signupDate: new Date(2022, 1, 13),
    passwordHash: 'random'
}

let task1 = {
    status: <TaskStatus>'Logged',
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: TaskStatus) { this.status = newStatus; }
}

let task2 = {
    status: <TaskStatus>'Done',
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus: TaskStatus) { this.status = newStatus; },
    moreProps: 300,
    evenMore: 'wow'
}

assignTask(user, task1);
assignTask(user, task2);
type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

function isValidUser(obj: object): obj is User {
    const idIsValid = 'id' in obj &&
        (
            (typeof obj.id === "number" && obj.id > 100) ||
            (typeof obj.id === "string" && obj.id.length === 14)
        );

    const usernameIsValid = 'username' in obj
        && typeof obj.username === 'string'
        && (obj.username.length >= 5 && obj.username.length <= 10);

    const passwordIsValid = 'passwordHash' in obj &&
        (
            (typeof obj.passwordHash === 'string' && obj.passwordHash.length === 20) ||
            (
                Array.isArray(obj.passwordHash)
                && obj.passwordHash.length === 4
                && obj.passwordHash.every(str => typeof str === 'string' && str.length === 8)
            )
        );

    const statusIsValid = 'status' in obj
        && (obj.status === 'Locked' || obj.status === 'Unlocked');

    return idIsValid && usernameIsValid && passwordIsValid && statusIsValid;
}

console.log(isValidUser({ id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }));             // false
console.log(isValidUser({ id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' }));                    // true
console.log(isValidUser({ id: '20', username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }));             // false
console.log(isValidUser({ id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw', '123-4567', '98765432'], status: 'Locked', email: 'something' })); // true
console.log(isValidUser({ id: 'qwwe-azfg-ey38', username: 'Someone', passwordHash: ['qwezz8jg', 'asdg-444', '12-34-56'], status: 'Unlocked' }));     // false
console.log(isValidUser({ id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567', status: 'Locked', email: 'something@abv.bg' }));       // false
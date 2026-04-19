function authorizeUser(service: MockAuthrizationService) {
    return function (target: object, propName: string, descriptor: PropertyDescriptor) {
        const originalGet = descriptor.get!;

        descriptor.get = function () {
            if (!service.canViewData(propName)) {
                throw new Error('You are not authorized to view this information')
            }

            const result = originalGet.call(this);
            return result
        }

        return descriptor;
    }
}

type userRoleType = 'Guest' | 'PersonalDataAdministrator' | 'Admin';

class MockAuthrizationService {
    private userRole: userRoleType;

    constructor(userRole: userRoleType) {
        this.userRole = userRole;
    }

    canViewData(property: string) {
        switch (this.userRole) {
            case 'Admin':
                return true;
            case 'PersonalDataAdministrator':
                return ['name', 'age'].includes(property);
            default:
                return false;
        }
    }
}

let mockAuthorizationService = new MockAuthrizationService('Admin');
// let mockAuthorizationService = new MockAuthrizationService('PersonalDataAdministrator');
// let mockAuthorizationService = new MockAuthrizationService('Guest');

class User {
    private _name: string;
    private _age: number;
    private _creditCardNumber: string;

    constructor(name: string, age: number, creditCardNumber: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }

    @authorizeUser(mockAuthorizationService)
    get name(): string {
        return this._name;
    }

    @authorizeUser(mockAuthorizationService)
    get age(): number {
        return this._age;
    }

    @authorizeUser(mockAuthorizationService)
    get creditCardNumber(): string {
        return this._creditCardNumber;
    }
}

const user1 = new User("John Doe", 30, 'ABCD-1234');
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);
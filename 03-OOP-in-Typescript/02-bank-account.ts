class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

// Example 1
const account1 = new BankAccount(100);
account1.deposit(50);
account1.withdraw(30);
console.log(account1.getBalance()); // 120

// Example 2
const account2 = new BankAccount(20);
account2.withdraw(30);
console.log(account2.getBalance()); // 20
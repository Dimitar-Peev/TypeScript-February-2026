type TwoParamOp = 'power' | 'log';
type MultiParamOp = 'add' | 'subtract' | 'multiply' | 'divide';
type Operation = TwoParamOp | MultiParamOp;

class Calculator {
    calculate(operation: TwoParamOp, a: number, b: number): number;
    calculate(operation: MultiParamOp, a: number, b: number, c?: number, d?: number): number;

    calculate(operation: Operation, a: number, b: number, c?: number, d?: number): number {

        const values: number[] = [a, b, c, d].filter(val => val !== undefined);

        switch (operation) {
            case 'power':
                return Math.pow(a, b);
            case 'log':
                return Math.log(a) / Math.log(b);
            case 'add':
                return values.reduce((acc, val) => acc + val, 0);
            case 'subtract':
                return values.reduce((acc, val) => acc - val);
            case 'multiply':
                return values.reduce((acc, val) => acc * val, 1);
            case 'divide':
                return values.reduce((acc, val) => acc / val);
        }
    }
}

const calc = new Calculator();

console.log(calc.calculate('power', 2, 3));                // 8
console.log(calc.calculate('power', 4, 1 / 2));               // 2
console.log(calc.calculate('log', 8, 2));                  // 3
console.log(calc.calculate('add', 10, 5));                 // 15
console.log(calc.calculate('add', 10, 5, 3));           // 18
console.log(calc.calculate('subtract', 10, 5));            // 5
console.log(calc.calculate('multiply', 2, 3, 4));       // 24
console.log(calc.calculate('divide', 100, 5, 2, 2)); // 5

// calc.calculate('power', 2, 3, 2);          // TS Error - 'power' not assignable to 'add' | 'subtract' | 'multiply' | 'divide'
// calc.calculate('add', 2);                  // TS Error – Expected 3-5 arguments but got 2
// calc.calculate('log', 2, 3, 4, 5);         // TS Error - 'log' not assignable to 'add' | 'subtract' | 'multiply' | 'divide'
// calc.calculate('multiply', 2, 3, 4, 5, 6); // TS Error – Expected 3-5 arguments but got 6
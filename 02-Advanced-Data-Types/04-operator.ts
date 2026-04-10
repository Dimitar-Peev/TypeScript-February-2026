type Param = string | number | string[];
type Operation = 'Index' | 'Length' | 'Add';

function useOperator(
    param: Param,
    operation: Operation,
    operand: number
) {
    if (operation === 'Index' && typeof param !== 'number') {
        return param[operand];
    } else if (operation === 'Length' && typeof param !== 'number') {
        return param.length % operand;
    } else if (operation === 'Add' && !Array.isArray(param)) {
        return Number(param) + operand;
    }
}

console.log(useOperator(['First', 'Second', 'Third'], 'Index', 1));   // Second
console.log(useOperator('string', 'Index', 1));                       // t
console.log(useOperator(['Just', 'Two'], 'Length', 5));               // 2
console.log(useOperator('short string1', 'Length', 5));               // 3
console.log(useOperator('7', 'Add', 3));                              // 10
console.log(useOperator(11, 'Add', 3));                               // 14
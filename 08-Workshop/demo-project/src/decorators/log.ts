export function Log(_target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const start = performance.now();

        const result = originalMethod.call(this, ...args);

        const end = performance.now();

        const executionTime = end - start;

        console.log(`Method ${methodName} executed in ${executionTime}ms!`);

        return result;
    }

    return descriptor;
}
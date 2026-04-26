export function CriticalStrike(target: object, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalValue = descriptor.value;

    if (!originalValue) {
        throw new Error("CriticalStrike can only be applied to methods");
    }

    descriptor.value = function (...args: any[]) {
        const baseDamage = originalValue.call(this, args);
        return baseDamage * 1.5;
    };

    return descriptor;
}
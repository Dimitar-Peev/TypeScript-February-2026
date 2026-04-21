export function ConvertToEuro(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get;

    if (!originalGet) {
        throw new Error(`ConvertToEuro can only be applied to getters.`);
    }

    descriptor.get = function () {
        const bgnPrice = originalGet?.call(this);

        if (typeof bgnPrice === 'number') {
            const euroPrice = bgnPrice / 1.95583;
            return parseFloat(euroPrice.toFixed(2));
        }

        return bgnPrice;
    };

    return descriptor;
}
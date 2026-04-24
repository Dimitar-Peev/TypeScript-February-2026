export function ApplyInsurance(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get;

    if (!originalGet) {
        throw new Error(`ApplyInsurance can only be applied to getters`)
    }

    descriptor.get = function () {
        const originalBaseRentalPrice = originalGet?.call(this);

        if (typeof originalBaseRentalPrice === 'number') {
            const insuredRentalPrice = originalBaseRentalPrice * 1.12;
            return parseFloat(insuredRentalPrice.toFixed(2));
        }

        return originalBaseRentalPrice;
    }

    return descriptor;
}

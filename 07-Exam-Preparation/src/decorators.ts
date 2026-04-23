export function NotifyOnSuccess(notificationType: 'Email' | 'Push') {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);

            if (typeof result === 'string' && !result.startsWith('ERROR')) {
                console.log(`[NOTIFY] Sending ${notificationType} notification for successful action "${propertyKey}".`);
            }

            return result;
        };

        return descriptor;
    };
}
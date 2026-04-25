import {Driver} from './models';
import {BaseVehicle, findItemById} from './vehicle-types';

export class FleetManager {
    private vehicles: BaseVehicle[] = [];
    private drivers: Map<number, Driver[]> = new Map();

    addVehicle(item: BaseVehicle): string {
        this.vehicles.push(item);
        this.drivers.set(item.id, []);
        return `Vehicle "${item.model}" (ID: ${item.id}) has been added.`;
    }

    assignDriver(vehicleId: number, driver: Driver): string {

        const driverList = this.drivers.get(vehicleId);

        if (!driverList) {
            return `ERROR: Vehicle with ID ${vehicleId} not found.`;
        }

        driverList!.push(driver);

        return `Driver ${driver.name} assigned to vehicle ID ${vehicleId} successfully.`;
    }

    listAllVehicles(): string[] {
        const result: string[] = ["--- List of All Vehicles ---"];

        for (const vehicle of this.vehicles) {
            const category = vehicle.category;
            const model = vehicle.model;
            const engineCC = vehicle.engineCC;
            const specificDetail = vehicle.getVehicleDetail();
            const cost = vehicle.getMaintenanceCost().toFixed(2);
            result.push(`[${category}] ${model} (${engineCC}cc, ${specificDetail}) - Maintenance: ${cost}€`);
        }

        result.push("-----------------------------")

        return result;
    }

    findVehicle(vehicleId: number): BaseVehicle | undefined {
        return findItemById(this.vehicles, vehicleId);
    }
}
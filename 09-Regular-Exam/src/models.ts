export enum VehicleCategory {
    Sedan = "SEDAN",
    SUV = "SUV",
    Truck = "TRUCK"
}

export interface Vehicle {
    id: number;
    model: string;
    engineCC: number;
    category: VehicleCategory;
}

export interface Driver {
    name: string;
    licenseNumber: string;
}

export interface WithId {
    id: number;
}
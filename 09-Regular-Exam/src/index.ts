import {FleetManager} from './fleet-manager.js';
import {Sedan, SUV, Truck} from './vehicle-types.js';
import {Driver} from './models';

async function main() {
    // --- Input 1: Add Vehicles ---
    const fleetManager = new FleetManager();
    const sedan = new Sedan(1, 'Toyota Camry', 2500, 5);
    const suv = new SUV(2, 'Ford Explorer', 3500, true, 180);
    const truck = new Truck(3, 'Volvo FH', 12000, 20, 350);

    const addedVehicles = [
        fleetManager.addVehicle(sedan),
        fleetManager.addVehicle(suv),
        fleetManager.addVehicle(truck),
    ];
    const [sedanAdded, suvAdded, truckAdded] = addedVehicles;

    const logVehicles = () => addedVehicles.forEach(v => console.log(v));

    console.log('\tOutput 1:');
    logVehicles();

    // --- Input 2: Assign Drivers ---
    const driver1: Driver = {name: 'Alice', licenseNumber: 'DL-001'};
    const driver2: Driver = {name: 'Bob', licenseNumber: 'DL-002'};
    console.log('\tOutput 2:');
    logVehicles();
    console.log(fleetManager.assignDriver(2, driver1));
    console.log(fleetManager.assignDriver(3, driver2));
    console.log(fleetManager.assignDriver(9, driver2));

    // --- Input 3: List All Vehicles ---
    console.log('\tOutput 3:');
    logVehicles();
    console.log(fleetManager.listAllVehicles().join('\n'));

    // --- Input 4: Find Vehicle by ID ---
    console.log('\tOutput 4:');
    logVehicles();
    const foundVehicle = fleetManager.findVehicle(2);
    if (foundVehicle) {
        console.log(`Found vehicle: ${foundVehicle.model}, Maintenance: ${foundVehicle.getMaintenanceCost()}€`);
    } else {
        console.log('Vehicle not found');
    }

    // --- Input 5: Check Decorated insuredRentalPrice ---
    console.log('\tOutput 5:');
    logVehicles();
    console.log(`Truck base rental price: ${truck.baseRentalPrice?.toFixed(2)}€`);
    console.log(`Truck insured rental price: ${truck.insuredRentalPrice?.toFixed(2)}€`);
    console.log(`Sedan insured rental price (should be undefined): ${sedan.insuredRentalPrice}`);
}

main();

export {FleetManager, Sedan, SUV, Truck};
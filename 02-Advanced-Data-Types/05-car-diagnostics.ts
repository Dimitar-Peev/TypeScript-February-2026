type Diagnosable = {
    partName: string;
    runDiagnostics(): string;
};
 
type CarBody = { material: string; state: string } & Diagnosable;
type Tires   = { airPressure: number; condition: string } & Diagnosable;
type Engine  = { horsepower: number; oilDensity: number } & Diagnosable;
 
function runDiagnostics(this: Diagnosable): string {
    return this.partName;
}
 
function carDiagnostics(carBody: CarBody, tires: Tires, engine: Engine) {
    console.log(carBody.runDiagnostics());
    console.log(tires.runDiagnostics());
    console.log(engine.runDiagnostics());
}
 
carDiagnostics(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }
);
 
import Director from "./director/director";
import VehicleBuilder from './builders/VehicleBuilder';
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder)

director.constructSedanCar()
const sedan: Vehicle = builder.getVehicle()
console.log(`Criando um veículo do tipo: ${sedan.vehicleType} com ${sedan.wheelsTotal} rodas`)

director.constructTruck()
const truck: Vehicle = builder.getVehicle()
console.log(`Criando um veículo do tipo: ${truck.vehicleType} com ${truck.wheelsTotal} rodas`) 
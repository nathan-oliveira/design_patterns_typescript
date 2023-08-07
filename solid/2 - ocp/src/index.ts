import TypeVihecle from "./TypeVehicle";
import Car from "./vehicles/Car";
import Motocycle from './vehicles/Motorcycle';

const type = TypeVihecle.CAR

let vehicle;

if (type === TypeVihecle.CAR) {
  vehicle = new Car('blue', 2023, 2.0, 4, 4)
} else if (type === TypeVihecle.MOTORCYCLE) {
  vehicle = new Motocycle('blue', 2023, 2.0)
}
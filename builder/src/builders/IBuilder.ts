import Engine from '../components/Engine';
import VehicleType from '../components/VehicleType';
import Wheel from '../components/Wheel';
import Vehicle from '../products/Vehicle';
import Transmission from '../components/Transmission';

export default interface IBuilder {
  reset(): void;
  getVehicle(): Vehicle;
  addWheel(wheel: Wheel)
  setVehicleType(value: VehicleType)
  setSeats(value: number)
  setEngine(engine: Engine)
  setTransmission(transmission: Transmission)
}
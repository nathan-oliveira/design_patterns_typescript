import IVehicleMotorcycle from './IVehicleMotorcycle';
import IVehicle from './IVehicle';

export default class Motorcycle implements IVehicleMotorcycle, IVehicle {
  constructor(
    color: string,
    year: number,
    engine: number,
  ) {
    this.configurationMotorcycle(color, year, engine)
  }

  startVehicle(): void {
    console.log('ligando os moteres.')
  }

  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(`criando uma moto: ${color}, ${year}, ${engine} cilindradas.`)

    this.startVehicle()
  }
}
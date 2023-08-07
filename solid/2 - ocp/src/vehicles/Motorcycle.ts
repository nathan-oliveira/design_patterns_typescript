import IVehicleMotorcycle from './abstraction/IVehicleMotorcycle';

export default class Motocycle implements IVehicleMotorcycle {
  constructor(
    color: string,
    year: number,
    engine: number,
  ) {
    this.configure(color, year, engine);
  }

  startVehicle(): void {
    console.log('ligando os moteres.')
  }

  configure(color: string, year: number, engine: number): void {
    console.log(`criando uma moto: ${color}, ${year}, ${engine} cilindradas.`)

    this.startVehicle()
  }
}
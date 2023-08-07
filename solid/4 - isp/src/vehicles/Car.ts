import IVehicleCar from './IVehicleCar';

export default class Car implements IVehicleCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number
  ) {
    this.configurationCar(color, year, engine, seats)
  }

  startVehicle(): void {
    console.log('ligando os moteres.')
  }

  configurationCar(color: string, year: number, engine: number, seats: number): void {
    console.log(`criando um carro: ${color}, ${year}, ${engine} potência, ${seats} assentos.`)

    this.startVehicle()
  }
}
import IVehicle from './interfaces/IVehicle';

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('iniciando a entrega.')
  }

  getCargo(): void {
    console.log('pegamos a encomenda.')
  }
}
import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando trajeto");
  }
  
  getCargo(): void {
    console.log("Já pegamos os passageiros, estamos prontos!");
  }
}
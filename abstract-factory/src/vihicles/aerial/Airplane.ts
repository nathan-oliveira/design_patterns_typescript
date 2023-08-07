import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {
  startRoute(): void {
    this.checkWind()
    this.getCargo()
    console.log('iniciando a decolagem')
  }

  getCargo(): void {
    console.log('pegamos o passageiro, estamos prontos')
  }

  checkWind(): void {
    console.log('Ventos a 25km, ventos ok')
  }
  
}
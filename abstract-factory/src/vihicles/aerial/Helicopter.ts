import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {
  startRoute(): void {
    this.checkWind()
    this.getCargo()
    console.log('iniciando a decolagem')
  }

  getCargo(): void {
    console.log('Pegamos o passageiro. Ligando hélices.')
  }

  checkWind(): void {
    console.log('Ventos a 25km, Sudeste, ventos ok!')
  }
}
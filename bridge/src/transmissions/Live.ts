import IPlatform from "../platforms/IPlatform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission {
  constructor(private platform: IPlatform) {}

  broadcasting(): void {
    console.log('Iniciando a transmissão')
  }

  result(): void {
    console.log('**** ON AIR ****')
  }
}
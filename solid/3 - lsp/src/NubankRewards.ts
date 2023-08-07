import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log('verificar a pontuação no rewards')
  }
  collectPayment(): void {
    console.log('pagar com a pontuação do rewards')
  }
}
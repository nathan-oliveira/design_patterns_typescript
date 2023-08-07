import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log('validação básica')
  }

  collectPayment(): void {
    console.log('pagamento realizado')
  }
}


import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/token";
import Payonner from '../payonner/Payonner';

export default class PayonnerAdapter implements IPayPalPayment {
  constructor(private payonner: Payonner) {}

  authToken(): Token {
    return this.payonner.authToken()
  }

  paypalPayment(): void {
    return this.payonner.sendPayment()
  }

  paypalReceive(): void {
    return this.payonner.receivePayment()
  }
}
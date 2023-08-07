import PayonnerAdapter from './adapters/PayonnerAdapter';
import IPayonnerPayment from './payonner/IPayonnerPayment';
import Payonner from './payonner/Payonner';
import IPayPalPayment from './paypal/IPayPalPayment';
import PayPal from './paypal/PayPal';

// const paymentPayPal: IPayPalPayment = new PayPal()
// paymentPayPal.paypalPayment()
// paymentPayPal.paypalReceive()

// const paymentPayonner: IPayonnerPayment = new Payonner()
// paymentPayonner.sendPayment()
// paymentPayonner.receivePayment()

const paymentPayonner: IPayPalPayment = new PayonnerAdapter(new Payonner())
paymentPayonner.paypalPayment()
paymentPayonner.paypalReceive()
import Token from "../utils/token";

export default interface IPayPalPayment {
  authToken(): Token;
  paypalPayment(): void;
  paypalReceive(): void;
}
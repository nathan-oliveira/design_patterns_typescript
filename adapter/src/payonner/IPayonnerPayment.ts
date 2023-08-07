import Token from "../utils/token";

export default interface IPayonnerPayment {
  authToken(): Token;
  sendPayment(): void;
  receivePayment(): void;
}
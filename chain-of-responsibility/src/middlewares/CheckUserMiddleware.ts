import Middleware from "./Middleware";
import DataBase from '../servers/DataBase';

export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (email.indexOf('@') === -1) return false;
    
    const validUser = DataBase.filter((item) => item.email === email && item.password === password).length;
    if (!validUser) return false;

    return this.checkNext(email, password);
  }
}
import Middleware from "./Middleware";
import DataBase from '../servers/DataBase';
import PermissionType from "../servers/PermissionType";

export default class CheckPermissionMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    const users = DataBase.filter((item) => item.email === email);
    if (!users.length) return false;
    if(users[0].permission === PermissionType.ADMIN) return true;

    return this.checkNext(email, password);
  }
}
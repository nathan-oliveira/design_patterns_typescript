import IDbProduct from "../model/IDbProduct";
import Db from '../model/Db';
import MySQLProduct from "../model/MySQLProduct";
import MongoDBProduct from '../model/MongoDBProduct';

export default class DbProductFactory {
  private static type: Db.MYSQL

  static create(): IDbProduct {
    if (DbProductFactory.type === Db.MYSQL)
      return new MySQLProduct()
    return new MongoDBProduct()
  }
}
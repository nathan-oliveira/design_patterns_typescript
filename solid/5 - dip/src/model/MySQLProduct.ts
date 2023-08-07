import IDbProduct from "./IDbProduct";

export default class MySQLProduct implements IDbProduct {
  getProducById(id: number): string {
    return `MySQL: exibindo dados do produto ${id}`
  }
}
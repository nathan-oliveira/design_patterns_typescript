import IDbProduct from "./IDbProduct";

export default class MongoDBProduct implements IDbProduct {
  getProducById(id: number): string {
    return `MongoDB: exibindo dados do produto ${id}`
  }
}
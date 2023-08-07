import Client from "./vihicles/client/Client";
import Company from "./vihicles/consts/Company";
import UberTransport from './vihicles/factories/UberTransport';
import NineNineTransport from './vihicles/factories/NineNineTransport';

const currentCompany = Company.NINENINE
let factory;

switch (currentCompany) {
  case Company.UBER:
    factory = new UberTransport()
    break;
  
  case Company.NINENINE:
    factory = new NineNineTransport()
    break;

  default:
    console.error('Desconhecida!')
    break;
}

const client = new Client(factory)
client.startRoute()
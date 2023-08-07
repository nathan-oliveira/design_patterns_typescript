import Transport from './transport/Transport';

import CarTransport from './transport/CarTransport'
import MotorcycleTransport from './transport/MotorcycleTransport'

// npm run dev -- --log
declare var process;

let transport: Transport | any;

if (process.argv.includes('--uber')) {
  transport = new CarTransport()
} else if (process.argv.includes('--log')) {
  transport = new MotorcycleTransport()
} else {
  transport = null;
  console.log('selecione tipo de entrega')
}


if (transport) {
  transport.startTransport()
}
import IPlatform from "./IPlatform";

export default class YouTube implements IPlatform {
  constructor() {
    this.configureRMTP()
    console.log('Youtube: Transmissão iniciada!')
  }

  configureRMTP(): void {
    this.authToken()
    console.log('Youtube: Configurando o broadcasting.')
  }

  authToken(): void {
    console.log('YouTube: Autorizando a aplicação.')
  }
}
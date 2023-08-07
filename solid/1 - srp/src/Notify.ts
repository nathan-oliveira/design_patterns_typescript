import Client from "./Client";

export default class Notify {
  constructor(private readonly client: Client) {}

  sendEmail(): boolean {
    console.log(this.client.email)
    return true;
  }
}

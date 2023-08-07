export default class Token {
  private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5hdGhhbiBPbGl2ZWlyYSIsImlhdCI6MTUxNjIzOTAyMn0.G2k_hKt-yN3ozYyqtxZAq9PBIBi-H0kRQnPdw_qx1b0';

  getToken(): string {
    return this.token
  }
}
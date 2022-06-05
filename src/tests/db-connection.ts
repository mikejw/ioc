
export class DBConnection {
  host: string;
  user: string;
  password: string;

  constructor(host: string, user: string, password: string) {
    this.host = host;
    this.user = user;
    this.password = password;
  }

  connect() {
    console.log('Connecting...');
  }
}

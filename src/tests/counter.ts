
export class Counter {
  public count: number;

  constructor() {
    this.count = 0;
  }

  getCount() {
    return ++this.count;
  }
}



export class Element {
  public identifier: string;
  public value: any;
  private instance: any;

  constructor(name: string, value: any) {
    this.identifier = name;
    this.value = value;
    this.instance = null;
  }

  getInstance() {
    return this.instance;
  }
  setInstance(instance: any) {
    this.instance = instance;
  }
}



// No Dependency Injection
class Carro {
  motor: Motor;

  constructor() {
    this.motor = new Motor();
  }
}

class Motor {
  cilindrada: number;

  constructor(cilindrada: number) {
    this.cilindrada = cilindrada;
  }
}

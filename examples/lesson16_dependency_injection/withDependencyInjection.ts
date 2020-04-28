// With Dependency Injection
class Carro {
  motor: Motor;

  constructor(motor: Motor) {
    this.motor = motor
  }
}

class Motor {
  cilindrada: number;

  constructor(cilindrada: number) {
    this.cilindrada = cilindrada;
  }
}

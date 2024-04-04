interface IInterface {
  move: boolean;
}
abstract class AbstractClass {
  protected abstract move(): IInterface["move"];

  public greet() {
    console.log("Hi");
  }

  public main() {
    this.move();
  }
}

class ClassA extends AbstractClass {
  move() {
    console.log("Running");
    return true;
  }
}
class ClassB extends AbstractClass {
  move() {
    console.log("Swimming");
    return true;
  }
}

const objA = new ClassA();
objA.main();
const objB = new ClassB();
objB.main();

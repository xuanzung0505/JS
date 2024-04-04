class Entity {
  protected value: string;
  constructor() {
    this.value = "entity";
  }

  greeting() {
    console.log(`${this.value} greeting`);
  }
}

class Human extends Entity {
  constructor() {
    super();
    this.value = "human";
  }

  greeting() {
    console.log(`I'm Adam!`);
  }
}

let a = new Entity();
a.greeting();

let b = new Human();
b.greeting();

const bar = "global";

function foo() {
  console.log(this.bar);
}

foo();

const obj1 = {
  bar: "bar obj1",
  foo: foo,
};

obj1.foo()


const obj2 = {
  bar: "bar obj2",
  foo: foo,
};

foo.call(obj2)
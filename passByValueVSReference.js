const passByValue = (x) => {
  x = x + 1;
};

const x = 1;
passByValue(x);
console.log(x);

const passByReference = (obj) => {
  //object
  if (typeof obj === "object" && "a" in obj) {
    obj.a = "AA";
    obj.c = "C";
    obj = { b: "BB" };
  } //array
  else if (typeof obj === "object" && "length" in obj) {
    obj.push(3, 4, 5);
    obj.shift();
  } //string
  else if (typeof obj === "string") {
    obj = obj.concat("A");
  }
};

// let obj = { a: "A", b: "B" };
obj = [];
// obj = "hello world";
passByReference(obj);
console.log(obj);

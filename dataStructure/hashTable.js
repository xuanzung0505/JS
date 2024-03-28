//object - a variance of hashTable
(function testObject() {
  let obj = { name: "John", age: 3 };
  let count = 0;
  for (let key in obj) {
    count++;
    console.log(key, obj[key]);
  }
  console.log(count);
});

//map - another variance
(function testMap() {
  const map = new Map();
  map.set("name", "John");
  map.set("age", "3");
  for (let [key, value] of map) {
    console.log(key, value);
  }
  console.log(map.size);
});

//hashTable

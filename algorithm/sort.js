const arr = [0, 15, 5, 80];

console.log(arr.sort((a, b) => a - b));

const fruits = ["apple", "Banana", "Cherry"];
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(fruits);

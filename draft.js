(function EX1() {
  const x = [1, 2, 3];
  x[-1] = 2;
  console.log(x);
  console.log(x.indexOf(1000));
  console.log(x[-1]);
  console.log(x[-2]);
})();

let a = "this is a F string???";
console.log(a.charAt(1));
console.log(a.slice(1));
console.log(a);

let bigNum = 123123124124214214n;
console.log(typeof bigNum);

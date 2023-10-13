//async await aids the problem of promise chaining
(async function EX1() {
  console.log("EX1");
  const asyncAdd = async (num1, num2) => num1 + num2; //always returns a promise

  const res1 = await asyncAdd(1, 1);
  const res2 = await asyncAdd(res1, 1);
  console.log(res1 + " " + res2);
});

(function EX2() {
  console.log("EX2");
  const asyncAdd = (num1, num2) => {
    const res = num1 + num2;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(res);
      }, 2000);
    });
  };

  Promise.all([asyncAdd(1, 2), asyncAdd(3, 4)])
    .then((values) => {
      console.log(values);
    })
    .catch((err) => {
      console.log(err);
    });
})();

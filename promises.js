(async function EX1() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error");
      //   resolve("hehehe");
    }, 2000);
  });

  myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((reason) => {
      console.log(reason);
    });

  //   async function asyncFunc() {
  //     return myPromise;
  //   }
  //   const result = await asyncFunc();
  //   console.log(result);
});

//CHAINING
(function EX2() {
  function createPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = 1 + 1;
        resolve(res);
      }, 2000);
    });
  }

  let myPromise = createPromise();

  myPromise
    .then((value) => {
      console.log(value);
      return createPromise();
    })
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });
})();

//promises.all
(function EX3() {
  function createPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = 1 + 1;
        resolve(res);
      }, 2000);
    });
  }

  Promise.all([createPromise(), createPromise()]).then((values) => {
    console.log(values);
  });
})();

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
})();

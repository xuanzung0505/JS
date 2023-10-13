(function EX1() {
  var obj = {
    id: "id",
    cool: function coolFn() {
      console.log(this.id);
      // this.id = "idd";
    },
  };

  var id = "fake id";
  obj.cool();
  // console.log(obj.id);
  setTimeout(obj.cool, 100);
  setTimeout(function a() {
    obj.cool();
  }, 100);
  // setTimeout(() => {
  //   obj.cool();
  // }, 100);
})();

(function EX2() {
  function foo(num) {
    console.log("foo:" + num);
    // this.count++; //wont work
    foo.count++; //worked
  }
  foo.count = 0;

  for (let i = 1; i <= 10; i++) {
    if (i > 5) foo(i);
  }

  console.log(foo.count);
});

//EX2 using this
(function EX2_clone() {
  console.log("EX2 clone");
  function foo(num) {
    console.log("foo:" + num);
    this.count++;
  }
  foo.count = 0;

  for (let i = 1; i <= 10; i++) {
    if (i > 5) foo.call(foo, i);
  }

  console.log(foo.count); //undefined
});

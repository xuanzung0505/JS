//CLOSURE
(function EX1() {
  console.log("EX1");
  function adder(x) {
    function addTo(y) {
      return x + y;
    }

    return addTo;
  }

  const addOne = adder(1);
  // console.log(addOne(3))
  const addTwo = adder(2);
  // console.log(addTwo(5))
})();

//EX2
(function EX2() {
  console.log("EX2");
  function foo() {
    let a = "a";
    function closure() {
      //this closure has a lexical scope of
      //foo, but is used outside of foo
      console.log(a);
    }
    return closure;
  }
  var closureExample = foo(); // = closure
  closureExample();
})();

//EX3
(function EX3() {
  console.log("EX3");
  foo();
  function foo() {
    var a = 2;
    function closure() {
      console.log(a);
    }
    bar(closure);
  }
  function bar(fn) {
    fn();
  }
})();

//equivalent to EX3
(function EX3_clone() {
  var fn;

  function foo() {
    var a = 2;
    function closure() {
      console.log(a);
    }

    fn = closure;
  }
  function bar() {
    fn();
  }

  foo();
  bar();
})();

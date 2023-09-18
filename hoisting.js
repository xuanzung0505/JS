//hoisting with "var" keyword -> not recommended
//not working with "let"

//EX1
//declaration + initialization
//of a is hoisted to the top
(function EX1() {
  a = 5;
  console.log(a);
  var a;
})();

//EX2
//only declaration
(function EX2() {
  var a = 5;
  console.log(a + b); //NaN because b is initialized later tho 
  //it's declared
  var b = 7;
})();

//EX3 -> use strict
(function EX3() {
  "use strict"; //somehow it's not working
  var a = 5;
  console.log(a + b);
  var b = 7;
})();

//EX4 -> let keyword
(function EX4(){
    a = 4; //error
    console.log(a); //error
    // let a;
    var a;
})();

//EX5
(function EX5(){
  // foo(); //error because foo isn't initialized (unknow Type),
  // tho it's declared
  var foo = function bar(){
    console.log("foo")
  }
})();

//EX6
(function EX6(){
  var foo; //will be skipped because there's function foo()
  
  foo() //will print latest declared function foo (foo2) 
  //because function is hoisted first
  function foo(){
    console.log("foo")
  }
  function foo(){
    console.log("foo2")
  }
  foo = function a(){
    console.log("a")
  };
  foo() //will print a
})();
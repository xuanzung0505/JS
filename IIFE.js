//Immediately Invoked Function Expression
//create a block-scope

//EX1
(function foo() {
  console.log("What's my name?");
})();
// foo() //error

//EX2
let global = {
  a: 2,
};

(function IIFE(def) {
  def(global);
})(function def(global) {
  let a = 3;
  console.log(a);
  console.log(global.a);
});

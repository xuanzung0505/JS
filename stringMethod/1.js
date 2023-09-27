(function Ex1() {
  console.log("EX1");
  let a = "This is a string!!!";
  for (let i = 0; i < a.length; i++) {
    console.log(i);
    console.log("substring:");
    a = a.substring(3, a.length - 1);
    console.log(a);
  }
})();

(function Ex2() {
  console.log("EX2");
  let a = "This is a string!!!";
  console.log("to lower case:");
  console.log(a.toLowerCase());
  console.log("slice:");
  console.log(a.slice(2, a.length));
  console.log(a);
  console.log("replaceAll");
  console.log(a.replaceAll("i", "I"));
  console.log(a.valueOf());
})();

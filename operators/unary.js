//unary plus, convert to number
let a = 3;
console.log(+a);

a = "3";
console.log(+a);

a = "12983712987398127389127983";
console.log(+a + " " + typeof a); //string, expected number -> there's a limit
console.log(BigInt(a)); //works fine

a = "132124124hhsd";
console.log(+a); //NaN

//unary negation
a = 3;
console.log(-a);

a = "3";
console.log(-a);

a = "3n";
console.log(-a); //NaN

a = 3n;
console.log(-a);

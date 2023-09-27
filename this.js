const bar = "global";

function foo() {
  console.log(this.bar);
}

foo();

const obj1 = {
  bar: "bar obj1",
  foo: foo,
};

obj1.foo();

const obj2 = {
  bar: "bar obj2",
  foo: foo,
};

foo.call(obj2);

(function EX1() {
  (() => {
    console.log(this); //refer to global object
  })();
})();

//try commenting out between 2 printGuest functions
//arrow function pass the context into "this", while functions make their own
//context 
(function EX2() {
  const event = {
    name : "Event",
    guests: ["Bob","Doe"],
    printGuests: function(){
      this.guests.forEach(function (guest){
        console.log(guest+" joined "+this.name)
      })
    },
    // printGuests(){
    //   this.guests.forEach((guest)=>{
    //     console.log(guest+" joined "+this.name)
    //   })
    // }
  }
  event.printGuests()
})()
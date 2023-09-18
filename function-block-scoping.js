//EX1.useful with garbage collector
(function EX1(){
    function process(data){
        //do something
    }
    
    //block-scoping like below will be collected
    {
        let someData = {}
        process(someData)
    }
    //do something else
})();

    //EX1.2
(function EX1_2(){
    var closure = (function() {
        var big_data_1 = {foo: "foo"};
        var big_data_2 = {};
    return function() { return big_data_1.foo; }
    })();
    // big_data_2 can be collected at this point.
    console.log(closure());  // This needs big_data_1.
    // big_data_1 still cannot be collected, closure might need it again.
    closure = null;
    // big_data_1 can be collected now.
})();

//EX2.let vs var
(function EX2(){
    (function process(){
        var foo = true
        if(foo){
            var bar = "bar"
        }
        console.log(bar)

        console.log(a)
        {
            var a = "a" //declared + not initialized + in a block -> block is meaningless
            // let a = "a" //try this -> error because let is block-scoped
        }
    })()
    console.log(a) //error
}());

//var is function-scoped (function, try-catch)
//let is block-scoped (function, {}, try-catch)
//using let automatically creates a new block in the scope (see IIFE+closure.js)
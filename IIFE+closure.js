//EX1 -> using IIFE
(function EX1(){
    for (var i=1; i<=5; i++) {
        (function closureScope(j){
            setTimeout( function timer(){
                console.log( j );
            }, i*1000 );
        })(i)
    }
});

//equivalent to EX1, but using 'let' automatically creates
//a block in scope
(function EX1_clone(){
    for (var i=1; i<=5; i++) {
        let j = i;
        setTimeout( function timer(){
            console.log( j );
        }, i*1000 );
    }
});

//equivalent to EX1, best practice
(function EX1_clone_2(){
    for (let i=1; i<=5; i++) {
        setTimeout( function timer(){
            console.log( i );
        }, i*1000 );
    }
})();
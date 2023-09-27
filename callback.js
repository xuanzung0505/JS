(function EX1(){
    const data = "data"

    const callCB = (callback)=>{
        // callback(data)
    }

    const myCallback = (data)=>{
        console.log(data)
    }
    setTimeout(()=>{
        callCB(myCallback)
    }, 2000)
})();

(function EX2(){

    const add = (a,b,callback)=>{
        setTimeout(()=>{
            callback(a+b)
        }, 2000)
    }

    add(1,2,console.log)

    // const a = 1
    // const b = 2

    // const sum = (a,b) =>{
    //     return a+b;
    // }

    // setTimeout(()=>{
    //     console.log(sum(a,b))
    // }, 2000)
})()
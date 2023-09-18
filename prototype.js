//PROTOTYPE
const obj = {
    b:42
}

let obj2 = Object.create(obj)
obj2.a = 41
console.log(obj2.a)
console.log(obj2.b)
obj2.b = 43
console.log(obj2.b)
function fn(a=0){
    return a+100
}

let fn1 = function (a){
    return a+100
}
//如果只有一个参数，圆括号可以省略 如果方法体中只有一行还是return 大括号也可以省略
let fn2=(a)=>{
    return a+100
}

let fn3 = a=>a+100

let res = fn3(1)
console.log(res)
//声明变量
//let定义的变量不可以重复声明，var可以
// var a
// a=1
// var a = true
/*
let a
a=1
let a=true
console.log(a)
*/
// var没有块级作用域 作用域内声明，域外一样可以获取到 但是let有,let更严谨
var flag =true
if(flag){
    //作用域
    var star= 5
}
console.log(star)

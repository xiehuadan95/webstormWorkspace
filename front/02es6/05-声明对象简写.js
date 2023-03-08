//传统
let person={
    name:"tom",
    age:2,
    sing:function (){
        console.log("i love you")
    },

}
console.log(person.name)
//声明对象的简写语法
let name='cike'
let age=100
let sing=function (){
    console.log('i love money')
}
let user={
    name,
    age,
    sing,
}
console.log(user.name)
user.sing()

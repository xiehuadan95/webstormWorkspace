let person ={username:'王三',age:19}
//引用传递，person 和someone引用的是同一块内存地址
//所以后面改变以后，引用这块地址的数据 都会变
let someone =person

console.log(person)
console.log(someone)

someone.username='桥边'
console.log(person)
console.log(someone)
//对象的拷贝
let one = {...person}
one.username='haha'

console.log(person)
console.log(someone)
console.log(one)
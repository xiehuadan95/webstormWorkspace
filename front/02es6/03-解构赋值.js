//1.数组的解构
const F4=['小沈阳','宋小宝','刘能','赵四']
console.log(F4)
let shengyang=F4[1]
let xiaobao1=F4[2]
console.log(shengyang)
console.log(xiaobao1)

var [shenyang,xiaobao,liuneng,zhaosi]=F4
console.log(liuneng)
console.log(zhaosi)
//对象的解构
const abs={
    name:'lily',
    age: 18,
    yanyuan: function (){
        console.log('演电视剧')
    },
    sex:'男',
    hometown:'铁岭',
}
let username=abs.name
let userage=abs.age
// let yandianshi=abs.yanyuan
console.log(userage)
console.log(username)
// yandianshi()
//解构
let {name,age,yanyuan} =abs
console.log(name)
console.log(age)
yanyuan()
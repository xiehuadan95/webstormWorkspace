
//可能不会传b 给b一个默认值，如果不传b
function add(a,b=0){
    console.log(`a是`, a)
    console.log(`b是`, b)
    return 100+a+b
}
//jsscript没有函数的重载，后定义的把前面的覆盖，后定义的生效
// function add(){
//     return 100
// }

let res= add(1)
console.log(res)
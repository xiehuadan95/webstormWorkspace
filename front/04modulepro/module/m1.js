//用let 定义，其他模块用了同样的变量 不会被覆盖会报错
//export 导出模块 自定义
// export let star ='王力宏'
//
// export function sing(title){
//     console.log(title)
// }
//第二种导出模块的方法
let star ='王力宏'

function sing(title){
    console.log(title)
}
//这里sing是对前面函数的引用 不能写括号，写了就成调用了
export {star,sing}
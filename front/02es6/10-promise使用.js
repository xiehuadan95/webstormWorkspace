//是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果
//异步编程解决方案： 文件的读取、ajax等等
const fs = require('fs') //引入node.js的本地文件扩展模块 固定的就是叫 fs
//实例化Promise
//Promise对象有三个状态 ：初始化状态，成功，失败
//自动注入进来的，resolv：函数类型的参数，可以将promise的状态设置为成功
// reject：函数类型的参数，可以将promise的状态设置为失败
const p = new Promise((resolve, reject) => {
    //所有的异步操作在这里面执行
    //自带固定方法 文件路径  读取过程中对响应结果的处理
    fs.readFile('./他.txt', (err, data) => {
        //当文件读取失败时候的错误对象
        if (err) {
            // console.log('文件读取失败') 将promise的状态改为失败
            reject(err)
        }
        //文件读取成功时的文件内容
        // console.log(data.toString()) 将promise的状态改为成功
        resolve(data)
    })

})
//实际上设置的是 promise这个对象P的状态 当其状态为成功时 then调用 当失败时 catch调用
//成功的时候，注入的参数为 data 这里可以写response 就是传递的data
//如果Promise状态为成功，这个then方法会自动被调用  都是内部自动注入进来
p.then((response) => {
    console.log(response.toString())
}).catch((error) => {
 console.log("出错了")
    console.log(error)
})
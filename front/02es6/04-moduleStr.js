//声明一个字符串
let str ="我是str"
console.log(str)
let str2=`反引号字符串`
console.log(str2)

//2.原样输出
let htmlStr='<ul><li>列表1</li><li>列表2</li></ul>'
console.log(htmlStr)
//如果用反引号 原样输出
let htmlStr2=`<ul>
<li>列表1</li>
<li>列表2</li>
</ul>`
console.log(htmlStr2)

//3.变量拼接（插值表达式/变量拼接）
let star ='贾玲'
let out =`我喜欢${star}这个人`
console.log(out)
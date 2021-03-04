//1题
var a = []
var i =0
for(i=0; i<10; i++ ){

    a[i] = function(){
        console.log(i)
    }
}

a[6]()

//打印10，因为i是全局变量，a[6]()代表数组中的第七个函数执行,如果用let那么打印的是6，

//2题
// var tmp =123
// if(true){
//     console.log(tmp)
//     let tmp
// }

//报错，暂存性死区，let定义声明变量提升，在上边打印报错
//3题
var arr=[12,34,32,89,2]
console.log(Math.min(...arr))
//4题
//var 全局作用域
//let 块级作用域，定义变量，能更改
//const 块级作用域 ，用于定义常量，不可以更改

//5题
var b =10
var obj ={
    b:20,
    fn(){
        setTimeout(()=>{
            console.log(this)
        })
    }
}
obj.fn()
//settimout的是箭头函数，里边没有this指向，要看他fn函数的调用，obj。fn所以是20

//6题表示对象属性，唯一，避免了名字的冲突,

//7题深拷贝和浅拷贝最根本的区别在于是否真正获取一个对象的复制实体，而不是引用。
// 假设B复制了A，修改A的时候，看B是否发生变化：
// 如果B跟着也变了，说明是浅拷贝（修改堆内存中的同一个值）
// 如果B没有改变，说明是深拷贝（修改堆内存中的不同的值）

//8题
// 异步编程callback => promise => generator => async/await 
// javascript上， 所有同步任务都在主线程上执行，也可以理解为存在一个“执行栈”。
// 主线程外，还有一个“任务队列”，任务队列的作用，就在等待异步任务的结果，只要异步任务有了运行结果，就会加入到“任务队列”中。
// 一旦执行栈中所有同步任务执行完毕，就从 任务队列 中读取“任务”加入到“执行栈”中。
// 主线程不断的在循环上面的步骤。（事件循环）
// 就是遇到宏任务，先执行宏任务，然后在执行微任务
//9题
setTimeout(function(){
    var ab='hello'
    setTimeout(function(){
        var cd ='word'
        setTimeout(function(){
            var df ='i love you'
            console.log(ab+cd+df)
        },10)
    },10)
},10)

new Promise(function(resolve){
    setTimeout(function(){
        resolve('hello')
    }, 10)
}).then(result => {
    // throw new Error('22222')

    return result + 'wrold'
    // setTimeout(function(){
    //     resolve(result + 'word')
    // }, 10)
},error=>{
    console.log(error,'2222')
}).then(result => {
    console.log(result + 'i love you ')
    // setTimeout(function(){
    //     resolve(result + 'i love you ')
    // }, 10)
}, error => {
    console.log(error)
})

//10题
// TypeScript 可以使用 JavaScript 中的所有代码和编码概念，TypeScript 增加了静态类型、类、模块、接口和类型注解,可以把声明、数据、函数和类封装在模块中
// JavaScript 代码可以在无需任何修改的情况下与 TypeScript 一同工作，同时可以使用编译器将 TypeScript 代码转换为 JavaScript
//JavaScript是弱类型语言，TypeScript是强类型语言

//11题
// 代码质量更好、更清晰，有时为了改进开发项目进行小的增量更改。这些小小的变化可能会有意想不到的后果，因此有必要撤销这些变化。使用TypeScript工具来进行重构更变的容易、快捷，更好的约束性
//前期项目成本高
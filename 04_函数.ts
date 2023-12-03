// 通常使用function关键字进行声明
// 无返回值的函数，返回值void可省略
function sayHello(name: string) {
    console.log('你好，' + name + '!')
}
// 函数调用
sayHello('Jack')

// 有返回值的函数
function sum(x: number, y: number): number {
    return x + y
}

let result = sum(21, 18)
console.log('21 + 18 = ' + result)

// 简写语法 箭头函数
let sayHi = (name: string) => {
    console.log('你好，' + name + '!')
}
sayHi('Rose')

// 可选参数，在参数后加?表示该参数是可选的
function sayHello2(name?: string) {
    // 判断name是否有值，没有值就给定一个默认值
    name = name ? name : '陌生人'
    console.log('你好，' + name + '!')
}
sayHello2()
sayHello2('Jack')

// 参数默认值，在参数后面赋值，表示该参数的默认参数
// 如果调用方没有传参，则使用默认值
function sayHello3(name: string = '陌生人') {
    console.log('你好，' + name + '!')
}
sayHello3()
sayHello3('Jack')

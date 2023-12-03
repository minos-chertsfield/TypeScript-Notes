// let声明变量关键字
// string 字符串类型，可以使用单引号或双引号
let msg: string = 'hello world'

// number 数值，整数、浮点数都可以
let age: number = 21

// boolean 布尔
let finished: boolean = true

// any 不确定类型，可以是任意类型（编译器不检查）
let a: any = 'jack'
a = 21

// union 联合类型，可以是多个指定类型
let u: string|number|boolean = 'rose'
u = 18

// Object 对象
let p = {name: 'Jack', age: 21}
// 通过变量名.属性名获取值
console.log(p.name)
// 或者通过key-value的方式进行获取
console.log(p['name'])

// Array 数组，元素可以是任意其他类型（2种声明语法）
let names: Array<string> = ['Jack', 'Rose']   // 1、Array<T>
let ages: number[] = [21, 18]   // 2、T[]
// 数组的访问
console.log(names[0])

// 常量声明关键字const
const PI: number = 3.14






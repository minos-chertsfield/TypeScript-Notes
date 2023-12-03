// 普通for循环
for(let i = 1; i < 10; i++) {
    console.log('点赞' + i + '次')
}

// while循环
let i = 1
while(i < 10) {
    console.log('点赞' + i + '次')
    i++
}

// 一些内置类型如Array提供了快捷迭代语法
// for...in  遍历得到数组脚标
let names: string[] = ['Jack', 'Rose']
for(const i in names) {
    console.log(i + ':' + names[i])
} 

// for...of  迭代器，直接得到数组元素
for(let name of names) {
    console.log(name)
}
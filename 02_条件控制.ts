// 定义数字
let num: number = 21

// if...else
if (num % 2 === 0) {    // == 可能会进行类型转换
    console.log(num + '是偶数')
} else {
    console.log(num + '是奇数')
}

// if...else if...else
if (num > 0) {
    console.log(num + '是正数')
} else if (num < 0) {
    console.log(num + '是负数')
} else {
    console.log(num + '是0')
}

// 在TypeScript中，空字符串、数字0、null、undefined都被认为是false，其他则是true

// switch语句
let grade: string = 'A'
switch (grade) {
    case 'A': {
        console.log('优秀')
        break
    }
    case 'B': {
        console.log('合格')
        break
    }
    case 'C': {
        console.log('不合格')
        break
    }
    default: {
        console.log('非法输入')
        break
    }
}
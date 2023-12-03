// 定义矩形类
class Rectangle {
    // 成员变量
    private width: number   // 不使用let
    private length: number
    // 构造函数
    constructor(width: number, length: number) {
        this.width = width
        this.length = length
    }
    // 成员方法
    public area(): number {
        return this.width * this.length
    }
}

// 定义正方形
class Square extends Rectangle {
    constructor(side: number) {
        // 调用父类构造
        super(side, side)
    }
}

let s = new Square(10)
console.log('正方形的面积为：' + s.area())

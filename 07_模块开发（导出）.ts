// 应用复杂时，可以将通用的功能抽取到单独的ts文件中，每个文件都是一个模块（module）
// 模块可以相互加载，提高代码复用性
export class Rectangle {   // 通过export导出类
    // 成员变量
    public width: number   // 不使用let
    public length: number
    // 构造函数
    constructor(width: number, length: number) {
        this.width = width
        this.length = length
    }
}

// 定义工具方法，求矩形面积，并通过export导出
export function area(rect: Rectangle): number {
    return rect.width * rect.length
}

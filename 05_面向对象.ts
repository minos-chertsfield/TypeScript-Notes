// 定义枚举
enum Msg {
    HI = 'Hi',    // 可以不赋值，默认会是数字，从0开始
    HELLO = 'Hello'
}

// 定义接口   抽象方法接收枚举参数
interface A {    // 定义规则
    say(msg: Msg): void    // 不需要function关键字
}

// 定义类，实现接口
class B implements A {
    say(msg: Msg): void {
        console.log(msg + ', I am B')
    }
}

// 初始化对象
let a: A = new B()   // B是A的一种，子类对象赋值给父类类型（多态）
// 调用方法，传枚举参数
a.say(Msg.HI)



// 通过import语法导入，from后面写文件的地址（通常使用相对路径，不需要文件后缀名）
import { Rectangle, area } from "./07_模块开发（导出）";

let r = new Rectangle(10, 20)

console.log('面积为：' + area(r))
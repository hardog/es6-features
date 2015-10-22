## let and const
+ let command
 - `let 只在所声明的代码块内有效`
 - `不像var那样存在变量声明提升问题`
 - `函数的作用域是其声明时所在的作用域`
 - `let 不允许在同一作用域内声明同一个变量`
 - `(TDZ)一旦let声明完成,即形成封闭作用域,声明之前使用变量会报错`
+ block scope
 - `ES6的块级作用域的出现可以达到完成闭包的功能`
 - `严格模式下,函数只能声明在顶层作用域和函数内,其他地方声明都会报错`
+ const command
 - `常量一旦声明将不会改变`
 - `对常量重新赋值将不会报错`
 - `不允许重复声明常量,强制声明将会报错`
 - `const声明的常量只是记录了变量的地址`
 - `常量的声明只在所声明的块级作用域内有效`
 - `如果需要强制对象不可变包括其属性,可使用Object.freeze`
+ cross module constant
 - `想尝试使用跨模块常量,可使用export,import`
```
// constants.js 模块
export const A = 1;
export const B = 3;
export const C = 4;

// test1.js 模块
import * as constants from './constants';
console.log(constants.A); // 1
console.log(constants.B); // 3

// test2.js 模块
import {A, B} from './constants';
console.log(A); // 1
console.log(B); // 3
```
+ global object property
 - `Javascript语言中,所有全局变量都是全局对象的属性`
 - `ES6规定,var、function命令声明的全局变量,属于全局属性`
 - `Node中, 对于REPL环境,模块环境必须显示声明称global的属性`
 - `let、const、class命令声明的全局变量,不属于全局对象的属性`

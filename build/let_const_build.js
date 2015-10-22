'use strict';

var Tool = require('../tool');

Tool.log('module', 'let and const');
// let command some tips
Tool.log('unit', 'let command');
Tool.log('single', 'let 只在所声明的代码块内有效');
Tool.log('single', '不像var那样存在变量声明提升问题');
Tool.log('single', '函数的作用域是其声明时所在的作用域');
Tool.log('single', 'let 不允许在同一作用域内声明同一个变量');
Tool.log('single', '(TDZ)一旦let声明完成,即形成封闭作用域,声明之前使用变量会报错');

// block scope some tips
Tool.log('unit', 'block scope');
Tool.log('single', 'ES6的块级作用域的出现可以达到完成闭包的功能');
Tool.log('single', '严格模式下,函数只能声明在顶层作用域和函数内,其他地方声明都会报错');

// const command some tips
Tool.log('unit', 'const command');
Tool.log('single', '常量一旦声明将不会改变');
Tool.log('single', '对常量重新赋值将不会报错');
Tool.log('single', '不允许重复声明常量,强制声明将会报错');
Tool.log('single', 'const声明的常量只是记录了变量的地址');
Tool.log('single', '常量的声明只在所声明的块级作用域内有效');
Tool.log('single', '如果需要强制对象不可变包括其属性,可使用Object.freeze');

// cross module constant some tips
Tool.log('unit', 'cross module constant');
Tool.log('single', '想尝试使用跨模块常量,可使用export,import');
Tool.log('\n// constants.js 模块\nexport const A = 1;\nexport const B = 3;\nexport const C = 4;\n\n// test1.js 模块\nimport * as constants from \'./constants\';\nconsole.log(constants.A); // 1\nconsole.log(constants.B); // 3\n\n// test2.js 模块\nimport {A, B} from \'./constants\';\nconsole.log(A); // 1\nconsole.log(B); // 3\n');

// global object property some tips
Tool.log('unit', 'global object property');
Tool.log('single', 'Javascript语言中,所有全局变量都是全局对象的属性');
Tool.log('single', 'ES6规定,var、function命令声明的全局变量,属于全局属性');
Tool.log('single', 'Node中, 对于REPL环境,模块环境必须显示声明称global的属性');
Tool.log('single', 'let、const、class命令声明的全局变量,不属于全局对象的属性');
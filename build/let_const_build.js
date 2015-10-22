'use strict';

var Tool = require('../tool');

Tool.log('module', 'let and const');
// let command some tips
Tool.log('unit', 'let command');
Tool.log('`let` 只在所声明的代码块内有效');
Tool.log('\n{\n  let a = 10;\n  var b = 1;\n}\n\na // ReferenceError: a is not defined.\nb // 1\n');

// block scope some tips
Tool.log('unit', 'block scope');

// const command some tips
Tool.log('unit', 'const command');

// cross module constant some tips
Tool.log('unit', 'cross module constant');

// global object property some tips
Tool.log('unit', 'global object property');
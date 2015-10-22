var Tool = require('../tool');

Tool.log('module', 'let and const');
// let command some tips
Tool.log('unit', 'let command');
Tool.log('`let` 只在所声明的代码块内有效');
Tool.log(`
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
`)

// block scope some tips
Tool.log('unit', 'block scope');


// const command some tips
Tool.log('unit', 'const command');


// cross module constant some tips
Tool.log('unit', 'cross module constant');


// global object property some tips
Tool.log('unit', 'global object property');


# let and const
+ let command
````let` 只在所声明的代码块内有效```
```
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
```
+ block scope
+ const command
+ cross module constant
+ global object property

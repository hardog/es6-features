# ES6 template literal string
+ Back-tick Basic
```
CONTEXT: 
var btTestContext = 'back-tick';
this is a test for ${btTestContext}

RESULT:
this is a test for back-tick
```
+ Expression
```
CONTEXT:
var btA = 12, btB = 12;
btA + btB is equal to ${btA} + ${btB} = ${btA + btB};

RESULT:
btA + btB is equal to 12 + 12 = 24;
```
+ use function
```
CONTEXT:
var negativeNum = -12;
use Math.abs fn ${Math.abs(negativeNum)}

RESULT:
use Math.abs fn 12
```
+ Tagged string
```
CONTEXT:
var tag = function(strings, ...values){
    var strings = strings.join('\n');
    var values = values.join('\n');

    // just todo something

    return '\nRESULT:\nstrings:\n' + strings + 'values:\n' + values + '\n';
};
var tagVarA = 12;

USAGE:
tag`this is string ${tagVarA}`
```
```
RESULT:
strings:
this is string 
values:
12
```
+ raw string => strings.raw[0]
```
CONTEXT:
var rawStr = function(strings, ...values){
    return '\nRESULT:\n' + strings.raw[0] + '\n'
};
var rawVar = 12;

USAGE:
rawStr`this is string ${rawVar}`

NOTES:
the rawVar variable is not show!
```
```
RESULT:
this is string 
```
+ raw string => String.raw
```
CONTEXT:
var rawVar2 = 12;

USAGE:
String.raw`this is string ${rawVar2}`

NOTES:
Not supported by node 0.12.7, String has not the raw method
Tested it in chrome45 is ok!
```

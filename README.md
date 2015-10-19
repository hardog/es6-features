# ES6-feature
Experiment ES6 features

# Usage
first, install npm & node, then type the following command:
```
$npm start
```

# Test Envioronment
```
OS :  Win 10.0.10240
node : 0.12.7
npm : 2.11.3
```

# Experiment List
## ES6 template literal string
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
+ raw string
```
CONTEXT:
var rawStr = function(strings, ...values){
    return '\nRESULT:\n' + strings.raw[0] + '\n'
};
var rawVar = 12;

USAGE:
rawStr`this is string ${rawVar}`
```
```
RESULT:
this is string 
```



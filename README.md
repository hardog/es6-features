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
- Back-tick Basic
```
CONTEXT: 
var btTestContext = 'back-tick';
this is a test for ${btTestContext}

RESULT:
this is a test for back-tick
```
- Expression
```
CONTEXT:
var btA = 12, btB = 12;
btA + btB is equal to ${btA} + ${btB} = ${btA + btB};

RESULT:
btA + btB is equal to 12 + 12 = 24;
```
- Tagged string
```
var tag = function(strings, ...values){
    console.log('RESULT:');
    console.log('strings is:');
    console.log(strings.join('\n'));
    console.log('values is:');
    console.log(values.join('\n'));

    // just todo something

    return 'this is the tag result!';
};
var tagVarA = 12;
```
RESULT:

strings is:

this is string 

values is:

12
```this is the tag result!```



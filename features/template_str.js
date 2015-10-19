// ============== define support =================
var Tool = require('./tool');

// define back-tick as bt
var bt;

Tool.log('module', 'ES6 template literal string');
// ============== back-triks =====================
Tool.log('unit', 'Back-tick Basic');
var btTestContext = 'back-tick';

Tool.log(`
CONTEXT: 
var btTestContext = 'back-tick';
this is a test for \$\{btTestContext\}

RESULT:
this is a test for ${btTestContext}
`);

// ============== expression ======================
Tool.log('unit', 'Expression');
var btA = 12, btB = 12;

Tool.log(`
CONTEXT:
var btA = 12, btB = 12;
btA + btB is equal to \$\{btA\} + \$\{btB\} = \$\{btA + btB\};

RESULT:
btA + btB is equal to ${btA} + ${btB} = ${btA + btB};
`);

// ============== tagged string ===================
Tool.log('unit', 'Tagged string');
var tag = function(strings, ...values){
    Tool.log('RESULT:\n');
    Tool.log('strings is:\n');
    Tool.log(strings.join('\n'));
    Tool.log('values is:\n');
    Tool.log(values.join('\n'));

    // just todo something

    return 'this is the tag result!';
};
var tagVarA = 12;

Tool.log(`
CONTEXT:
var tag = function(strings, ...values){
    Tool.log('RESULT:');
    Tool.log('strings is:');
    Tool.log(strings.join('\\n'));
    Tool.log('values is:');
    Tool.log(values.join('\\n'));

    // just todo something

    return 'this is the tag result!';
};
var tagVarA = 12;
`);
Tool.log(tag`this is string ${tagVarA}`);
// ============== define support =================
var Tool = require('../tool');

// notes: define back-tick as bt prefix

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

// ================== use function  ======================
Tool.log('unit', 'use function');
var negativeNum = -12;

Tool.log(`
CONTEXT:
var negativeNum = -12;
use Math.abs fn \$\{Math.abs(negativeNum)\}

RESULT:
use Math.abs fn ${Math.abs(negativeNum)}
`);

// ============== tagged string ===================
Tool.log('unit', 'Tagged string');
var tag = function(strings, ...values){
    var strings = strings.join('\n');
    var values = values.join('\n');

    // just todo something

    return '\nRESULT:\nstrings:\n' + strings + 'values:\n' + values + '\n';
};
var tagVarA = 12;

Tool.log(`
CONTEXT:
var tag = function(strings, ...values){
    var strings = strings.join('\\n');
    var values = values.join('\\n');

    // just todo something

    return '\\nRESULT:\\nstrings:\\n' + strings + 'values:\\n' + values + '\\n';
};
var tagVarA = 12;

USAGE:
tag\`this is string \$\{tagVarA\}\`
`);
Tool.log(tag`this is string ${tagVarA}`);

// =================== raw string => strings.raw[0] ====================
Tool.log('unit', 'raw string => strings.raw[0]');
var rawStr = function(strings, ...values){
    return '\nRESULT:\n' + strings.raw[0] + '\n'
};
var rawVar = 12;

Tool.log(`
CONTEXT:
var rawStr = function(strings, ...values){
    return '\\nRESULT:\\n' + strings.raw[0] + '\\n'
};
var rawVar = 12;

USAGE:
rawStr\`this is string \$\{rawVar\}\`

NOTES:
the rawVar variable is not show!
`);
Tool.log(rawStr`this is string ${rawVar}`);

// =================== raw string => Strings.raw`string` ====================
Tool.log('unit', 'raw string => String.raw');
var rawVar2 = 12;
Tool.log(`
CONTEXT:
var rawVar2 = 12;

USAGE:
String.raw\`this is string \$\{rawVar2\}\`

NOTES:
Not supported by node 0.12.7, String has not the raw method
Tested it in chrome45 is ok!
`);
// Tool.log(String.raw`this is string ${rawVar2}`);
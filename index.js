// ============== define support =================
'use strict';

var _templateObject = _taggedTemplateLiteral(['this is string ', ''], ['this is string ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Tool = require('./tool');

// define back-tick as bt
var bt;

Tool.log('module', 'ES6 template literal string');
// ============== back-triks =====================
Tool.log('unit', 'Back-tick Basic');
var btTestContext = 'back-tick';

Tool.log('\nCONTEXT: \nvar btTestContext = \'back-tick\';\nthis is a test for ${btTestContext}\n\nRESULT:\nthis is a test for ' + btTestContext + '\n');

// ============== expression ======================
Tool.log('unit', 'Expression');
var btA = 12,
    btB = 12;

Tool.log('\nCONTEXT:\nvar btA = 12, btB = 12;\nbtA + btB is equal to ${btA} + ${btB} = ${btA + btB};\n\nRESULT:\nbtA + btB is equal to ' + btA + ' + ' + btB + ' = ' + (btA + btB) + ';\n');

// ============== tagged string ===================
Tool.log('unit', 'Tagged string');
var tag = function tag(strings) {
    console.log('RESULT:');
    console.log('strings is:');
    console.log(strings.join('\n'));
    console.log('values is:');

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    console.log(values.join('\n'));

    // just todo something

    return 'this is the tag result!';
};
var tagVarA = 12;

Tool.log('\nvar tag = function(strings, ...values){\n    console.log(\'RESULT:\');\n    console.log(\'strings is:\');\n    console.log(strings.join(\'\n\'));\n    console.log(\'values is:\');\n    console.log(values.join(\'\n\'));\n\n    // just todo something\n\n    return \'this is the tag result!\';\n};\nvar tagVarA = 12;\n');
Tool.log(tag(_templateObject, tagVarA));
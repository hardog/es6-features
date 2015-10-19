var execSync = require('child_process').execSync;
var fs = require('fs');
var _ = require('underscore');
var path = require('path');
var grunt = require('grunt');

var readmePath = 'README.md';
var readmeTemplateContent = _.template(grunt.file.read(path.join(__dirname, 'README.template')));

var compiledPaths = './compiled/';
var buildPaths = './build/'; 
var featuresPaths = './features/';

var fileList = fs.readdirSync(featuresPaths);
var output,
    nodeCommand,
    indexReadMeTpl = [];

_.each(fileList, function(v, k ){
    nodeCommand = 'node ' + buildPaths + v.replace(/\.js/, '') + '_build.js';
    output = execSync(nodeCommand).toString();
    indexReadMeTpl.push('- [' + v + '](' + (compiledPaths + v.replace(/\.js/, '.md')) + ')');
    grunt.file.write(path.join(__dirname, compiledPaths + v.replace(/\.js/, '.md')), output);
});

// readme write back
grunt.file.write(path.join(__dirname, readmePath), readmeTemplateContent({
    result:indexReadMeTpl.join('\n')
}));


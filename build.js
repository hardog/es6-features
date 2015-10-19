var execSync = require('child_process').execSync;
var _ = require('underscore');
var path = require('path');
var grunt = require('grunt');

var readmeLocatePath = path.join(__dirname, 'README.md');
var readmeTemplateContent = _.template(grunt.file.read(path.join(__dirname, 'README.template')));

var nodeCommand = 'node index';

var output = execSync(nodeCommand).toString();

grunt.file.write(readmeLocatePath, readmeTemplateContent({
    result:output
}));

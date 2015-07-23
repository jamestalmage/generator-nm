'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('generator', function () {
	beforeEach(function (cb) {
		var deps = ['../app'];

		helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) {
				cb(err);
				return;
			}

			this.generator = helpers.createGenerator('nm:app', deps, null, {skipInstall: true});
			cb();
		}.bind(this));
	});

	it('generates expected files', function (cb) {
		var expected = [
			'.editorconfig',
			'.gitattributes',
			'.gitignore',
			'.jshintrc',
			'test/.jshintrc',
			'.jscsrc',
			'test/.jscsrc',
			'.travis.yml',
			'index.js',
			'license',
			'package.json',
			'readme.md',
			'test/test.js'
		];

		helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			cli: false,
      node8: false
		});

		this.generator.run(function () {
			assert.file(expected);
      assert.noFileContent('.travis.yml', '0.8');
			cb();
		});
	});

	it('CLI option', function (cb) {
		helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			cli: true,
      node8: true
		});

		this.generator.run(function () {
			assert.file('cli.js');
			assert.fileContent('package.json', /"bin":/);
			assert.fileContent('package.json', /"bin": "cli.js"/);
			assert.fileContent('package.json', /"meow"/);
      assert.fileContent('.travis.yml', '0.8');
			cb();
		});
	});
});

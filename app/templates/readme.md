# <%= moduleName %> 

My <%= superb %> module

[![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>)
[![Coverage Status](https://coveralls.io/repos/<%= githubUsername %>/<%= moduleName %>/badge.svg?branch=master&service=github)](https://coveralls.io/github/<%= githubUsername %>/<%= moduleName %>?branch=master)
[![Code Climate](https://codeclimate.com/github/<%= githubUsername %>/<%= moduleName %>/badges/gpa.svg)](https://codeclimate.com/github/<%= githubUsername %>/<%= moduleName %>)
[![Dependency Status](https://david-dm.org/<%= githubUsername %>/<%= moduleName %>.svg)](https://david-dm.org/<%= githubUsername %>/<%= moduleName %>)
[![devDependency Status](https://david-dm.org/<%= githubUsername %>/<%= moduleName %>/dev-status.svg)](https://david-dm.org/<%= githubUsername %>/<%= moduleName %>#info=devDependencies)

[![NPM](https://nodei.co/npm/<%= moduleName %>.png)](https://nodei.co/npm/<%= moduleName %>/)

## Install

```
$ npm install --save <%= moduleName %>
```


## Usage

```js
var <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('unicorns');
//=> unicorns & rainbows
```
<% if (cli) { %>

## CLI

```
$ npm install --global <%= moduleName %>
```
```
$ <%= moduleName %> --help

  Usage
    <%= moduleName %> [input]

  Example
    <%= moduleName %>
    unicorns & rainbows

    <%= moduleName %> ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```
<% } %>

## API

### <%= camelModuleName %>(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [<%= name %>](<%= website %>)

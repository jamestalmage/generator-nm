'use strict';
var assert = require('assert');
var <%= camelModuleName %> = require('../');

describe('<%= moduleName %>', function() {

  it('should', function() {
    assert.equal(<%= camelModuleName %>('unicorns'), 'unicorns & rainbows');
  });

});

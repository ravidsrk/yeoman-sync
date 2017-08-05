const assert = require('assert');
const yeomanSync = require('../index.js');

describe('yeomanSync', function () {
  it('has a test', function () {
    yeomanSync({name: 'Yeoman'});
    assert(true, 'yeomanSync should have a test');
  });
});

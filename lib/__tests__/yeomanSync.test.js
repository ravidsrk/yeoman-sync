const assert = require('assert');
const yeomanSync = require('../index.js');

describe('yeomanSync', function () {
  it('has a test', function () {
    yeomanSync({
      destination: 'androidstarters-java',
      rename: [{
        dest: 'gitignore',
        src: '.gitignore'
      }, {
        dest: 'app/gitignore',
        src: 'app/.gitignore'
      }],
      replace: [{
        regex: 'io.mvpstarter.sample',
        replacement: '<%= appPackage %>'
      }],
      repo: {
        branchName: 'develop',
        url: 'https://github.com/androidstarters/android-starter.git'
      }
    });
    assert(true, 'yeomanSync should have a test');
  });
});

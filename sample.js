const yeomanSync = require('./lib/index.js');

let config = {
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
};

yeomanSync(config);

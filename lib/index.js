'use strict';

const clone = require('nodegit').Clone;
const replace = require('replace');
const fs = require('fs-extra');

module.exports = function (config) {
  fs.emptyDirSync('./tmp');
  clone('https://github.com/ravidsrk/android-starter.git', './tmp')
    .then(function () {
      for (var i = config.replace.length - 1; i >= 0; i--) {
        replace({
          regex: config.replace[i].regex,
          replacement: config.replace[i].replacement,
          paths: ['./tmp'],
          recursive: true,
          silent: true
        });
      }

      for (var j = config.rename.length - 1; j >= 0; j--) {
        fs.moveSync('./tmp/' + config.rename[j].src, './tmp/' + config.rename[j].dest);
      }

      fs.copySync('./tmp', './templates/' + config.destination);
      fs.removeSync('./tmp');
    })
    .catch(function (err) {
      console.log(err);
    });
};

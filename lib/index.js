'use strict';

const clone = require('nodegit').Clone;
const replace = require('replace');
const fs = require('fs-extra');
const tmp = require('tmp');

module.exports = function (config) {
  var tmpDir = tmp.dirSync();
  clone(config.repo.url, tmpDir.name)
    .then(function () {
      for (var i = config.replace.length - 1; i >= 0; i--) {
        replace({
          regex: config.replace[i].regex,
          replacement: config.replace[i].replacement,
          paths: [tmpDir.name],
          recursive: true,
          silent: true
        });
      }

      for (var j = config.rename.length - 1; j >= 0; j--) {
        fs.moveSync(tmpDir.name + "/" + config.rename[j].src, tmpDir.name + "/" + config.rename[j].dest);
      }
      fs.copySync(tmpDir.name, './templates/' + config.destination);
    })
    .catch(function (err) {
      console.log(err);
    });
};

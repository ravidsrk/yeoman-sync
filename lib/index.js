'use strict';

const clone = require('nodegit').Clone;
const replace = require('replace');
const fs = require('fs-extra');
const tmp = require('tmp');
const ora = require('ora');

module.exports = function (config) {
  var tmpDir = tmp.dirSync();
  var spinner = ora(`Cloning ${config.repo.url} ...`).start()
  clone(config.repo.url, tmpDir.name)
    .then(function () {
      spinner.stop();

      for (var i = config.replace.length - 1; i >= 0; i--) {
        spinner = ora(`Replacing regex ${config.replace[i].regex} with ${config.replace[i].regex}`).start()
        replace({
          regex: config.replace[i].regex,
          replacement: config.replace[i].replacement,
          paths: [tmpDir.name],
          recursive: true,
          silent: true
        });
        spinner.stop();
      }

      for (var j = config.rename.length - 1; j >= 0; j--) {
        fs.moveSync(tmpDir.name + "/" + config.rename[j].src, tmpDir.name + "/" + config.rename[j].dest);
      }
      fs.copySync(tmpDir.name, './templates/' + config.destination);
      // spinner.stop();
    })
    .catch(function (err) {
      console.log(err);
    });
};

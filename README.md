# yeoman-sync [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Yeoman generator templates sync.

## Installation

```sh
$ npm install --save yeoman-sync
```

## Usage

```js
const yeomanSync = require('yeoman-sync');

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
}

yeomanSync(config);
```
## License

MIT © [Ravindra Kumar](https://github.com/androidstarters)


[npm-image]: https://badge.fury.io/js/yeoman-sync.svg
[npm-url]: https://npmjs.org/package/yeoman-sync
[travis-image]: https://travis-ci.org/androidstarters/yeoman-sync.svg?branch=master
[travis-url]: https://travis-ci.org/androidstarters/yeoman-sync
[daviddm-image]: https://david-dm.org/androidstarters/yeoman-sync.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/androidstarters/yeoman-sync

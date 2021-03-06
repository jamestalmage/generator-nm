# generator-jt-nm [![Build Status](https://travis-ci.org/jamestalmage/generator-nm.svg?branch=james-talmage-preferences)](https://travis-ci.org/jamestalmage/generator-nm)

> A fork of the node module [scaffolding](https://npmjs.com/generator-nm) by [@sindresorhus](https://www.npmjs.com/~sindresorhus).
> It changes preferred indentation to spaces from tabs, and moves tests to a subdirectory.
> It adds istanbul for coverage (with coveralls reporting), and JSCS for style enforcement.
> It adds a bunch of badges to the readme (nodei.co, coveralls, david-dm, and codeclimate).

## Build Targets in Generated Project

- `npm test` : run tests with coverage, then lint and check styles
- `npm run test` : watch for changes and rerun the tests when detected.
- `npm run lint` : run just the linter
- `npm run style` : run just the style check
- `npm run debug` : run tests (no coverage, no lint/style checks). Especially helpful if your stacktraces have mangled line numbers

Optionally with a [CLI](http://en.wikipedia.org/wiki/Command-line_interface).

![](screenshot.png)


## Install

```
$ npm install --global generator-jt-nm
```


## Usage

With [yo](https://github.com/yeoman/yo):

```
$ yo jt-nm
```


## Tip

Browse the source of my module and the upstream one by @sindresorhus. It's incredibly easy to fork and tweak things to your liking.


## License

MIT 

Original Source © [Sindre Sorhus](http://sindresorhus.com)

Modifications © [James Talmage](https://github.com/jamestalmage)

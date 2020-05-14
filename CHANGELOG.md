# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2020-05-14

### Added

- adds pick function
- memoize function
- Maybe type and maybe constructor
- mapMaybe function
- partition function
- Either type and its constructors: left, right, jsonError,and error
- Either helpers: partition, tryCatch, and tryCatchAsync
- supports Deno 1.0.0

### Changed

- flatten function flattens by one level instead of Infinity
- locked all std dependency versions
- added better typings for places where types could be ambigous
- migrated to `deno test`
- bumped `std` version to `v0.42.0`
- fixes `prop` failing TS checks when being used
- account for removal of `Deno.symbols` namespace

### Removed

## [0.2.0] - 2020-02-06

### Added

- keys function
- omit function
- sort function
- slice function
- values function
- this CHANGELOG.md file
- CONTRIBUTORS.md
- new logo (courtesy of [Weronika Wróbel](https://www.behance.net/weronikawrobel)) 🎉!
- Dockerfile
- added JSDoc for functions
- added warnings about pre-production usage and simple roadmap about versioning and release schedule
- concat function
- equals function
- find function
- flatten function
- has function
- nth function
- has function
- prop function
- groupBy function
- includes function
- last function
- GitHub Actions for CI
- pluck function
- slice function

### Changed

- added more types
- added missing docs to find
- fixed unintentional mutation in sort function
- sort supports any numbers now, not only 1, 0 and -1

### Removed

- removed doubled `test.ts` file
- removed importmaps completely (check [issue #20](https://github.com/galkowskit/denofun/issues/20))
- removed curry-by-default behaviour

## [v0.1.0] - 2019-07-17

### Added

- compose function
- curry function
- filter function
- head function
- identity function
- map function
- pipe function
- reduce function
- reverse function
- tail function

[unreleased]: https://github.com/galkowskit/denofun/compare/0.3.0...HEAD
[0.3.0]: https://github.com/galkowskit/denofun/compare/v0.2.0...0.3.0
[v0.2.0]: https://github.com/galkowskit/denofun/compare/v0.1.0...v0.2.0
[v0.1.0]: https://github.com/galkowskit/denofun/releases/tag/v0.1.0

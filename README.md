# react-native-async-storage-wrapper [![NPM version](https://badge.fury.io/js/react-native-async-storage-wrapper.svg)](https://npmjs.org/package/react-native-async-storage-wrapper) [![Build Status](https://travis-ci.org/ingenuityph/react-native-async-storage-wrapper.svg?branch=master)](https://travis-ci.org/ingenuityph/react-native-async-storage-wrapper)

> An Async Storage utility wrapper for React Native projects thru the initiative of Ingenuity Labs.

## Installation

```sh
$ npm install --save @ingenuity-labs/react-native-async-storage-wrapper
```

## Usage
`AsyncStorage` is a collection of utility methods designed to simplify storing of an object to React Native's `AsyncStorage` module. It is composed of three(3) methods.

* `getObjectWithIdentifier(identifier)`
> Retrieves the corresponding object of the provided `identifier` from the storage. It returns a `Promise` object wherein the object is returned when resolve, else, you need to catch the error when it failed to fetch the object.

* `removeObjectWithIdentifier(identifier)`
> Removes the corresponding object of the provided `identifier` to the storage, else, you need to catch the error when it failed to remove the object.

* `setObjectWithIdentifier(object, identifier)`
> Stores the corresponding `object` with its given `identifier` to the storage, else, you need to catch the error when it failed to store the object.

## Contributing

1. Fork repository
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

MIT

import { AsyncStorage as ReactNativeAsyncStorage } from 'react-native';


const AsyncStorage = {

  getObjectWithIdentifier: (identifier) => {
    const promise = new Promise(async (resolve, reject) => {
      try {
        const object = await ReactNativeAsyncStorage.getItem(identifier);

        resolve(object);
      } catch (error) {
        reject();
      }
    });

    return promise;
  },

  removeObjectWithIdentifier: async (identifier) => {
    try {
      await ReactNativeAsyncStorage.removeItem(identifier);
    } catch (error) {
      // Do nothing
    }
  },

  setObjectWithIdentifier: async (object, identifier) => {
    try {
      await ReactNativeAsyncStorage.setItem(identifier, object);
    } catch (error) {
      // Do nothing
    }
  },
};

/* Export ==================================================================== */

module.exports = AsyncStorage;
module.exports.details = {
  title: 'AsyncStorage',
};

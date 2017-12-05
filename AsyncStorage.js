import { AsyncStorage as ReactNativeAsyncStorage } from 'react-native';


const AsyncStorage = {

  getObjectWithIdentifier: (identifier) => {
    return new Promise(async function(resolve, reject) {
      try {
        var object = await ReactNativeAsyncStorage.getItem(identifier);

        resolve(object);
      } catch (error) {
        console.log(`Error getting object: ${error}`);

        reject();
      }
    });
  },

  removeObjectWithIdentifier: async (identifier) => {
    try {
      await ReactNativeAsyncStorage.removeItem(identifier);
    } catch (error) {
      console.log(`Error removing object: ${error}`);
    }
  },

  setObjectWithIdentifier: async (object, identifier) => {
    try {
      await ReactNativeAsyncStorage.setItem(identifier, object);
    } catch (error) {
      console.log(`Error setting object: ${error}`);
    }
  }

}

/* Export ==================================================================== */

module.exports = AsyncStorage;
module.exports.details = {
  title: 'AsyncStorage',
};

import App from './src/App';
import React from 'react';
import { AppRegistry, NativeModules } from 'react-native';


NativeModules.RNI18n = {
  languages: ['fr'],
  getLanguages: () => Promise.resolve(['fr'])
}

// register the app
AppRegistry.registerComponent('ReactNativeTypeScriptStarter', () => App);

AppRegistry.runApplication('ReactNativeTypeScriptStarter', {
    initialProps: {},
    rootTag: document.getElementById('react-root')
});

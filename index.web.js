import App from './src/App';
import React from 'react';
import { AppRegistry } from 'react-native';

// register the app
AppRegistry.registerComponent('ReactNativeTypeScriptStarter', () => App);

AppRegistry.runApplication('ReactNativeTypeScriptStarter', {
    initialProps: {},
    rootTag: document.getElementById('root')
});
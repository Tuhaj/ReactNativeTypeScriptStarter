import { AppRegistry } from 'react-native';
import I18nJs from 'i18n-js';
import App from './src/App';
import React from 'react';

const languages = [navigator.language]
I18nJs.locale = navigator.language;

// register the app
AppRegistry.registerComponent('ReactNativeTypeScriptStarter', () => App);

AppRegistry.runApplication('ReactNativeTypeScriptStarter', {
    initialProps: {},
    rootTag: document.getElementById('react-root')
});

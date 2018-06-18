import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('ReactNativeTypeScriptStarter', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('react-root') });
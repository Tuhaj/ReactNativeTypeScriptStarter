import Reactotron from 'reactotron-react-native';
import {applyMiddleware, createStore} from 'redux';
import { enthusiasm } from './reducers';
import './ReactotronConfig';
import {Platform} from "react-native";

export const configureStoreWeb = () => {

  if (__DEV__ && Platform.OS !== 'web') {
      return Reactotron.createStore(enthusiasm, applyMiddleware())
  } else {
    return createStore(enthusiasm)
  }
}

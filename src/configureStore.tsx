import Reactotron from 'reactotron-react-native';
import {applyMiddleware, createStore} from 'redux';
import { enthusiasm } from './reducers';
import './ReactotronConfig';

export const configureStore = () => {
  if (__DEV__) {
      return Reactotron.createStore(enthusiasm, applyMiddleware())
  } else {
    return createStore(enthusiasm)
  }
}

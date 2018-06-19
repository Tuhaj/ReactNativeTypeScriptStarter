import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import {applyMiddleware, createStore} from 'redux';
import { enthusiasm } from './reducers';
import './ReactotronConfig';

const initialState = {
    enthusiasmLevel: 1,
    name: 'React Native and Web!',
};

export const configureStore = () => {

  if (__DEV__) {
      return Reactotron.createStore(enthusiasm, initialState, applyMiddleware())
  } else {
    return createStore(enthusiasm, initialState)
  }
}

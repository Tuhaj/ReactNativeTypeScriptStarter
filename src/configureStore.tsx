import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { enthusiasm } from './reducers';
// import Reactotron from 'reactotron-react-native'

// import {combineEpics, createEpicMiddleware} from 'redux-observable'
// const rootEpic = combineEpics();
// const epicMiddleware = createEpicMiddleware(rootEpic);

const initialState = {
  enthusiasmLevel: 1,
  name: 'Piotr Zientara',
};

export const configureStore = () => {
  if (__DEV__) {
      return createStore(enthusiasm, initialState)
  } else {
    return createStore(enthusiasm, initialState)
  }
}

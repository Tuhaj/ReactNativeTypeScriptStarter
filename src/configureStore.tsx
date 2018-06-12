import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
// import {combineEpics, createEpicMiddleware} from 'redux-observable'
import Reactotron from 'reactotron-react-native'
import { enthusiasm } from './reducers';
// const rootEpic = combineEpics();
// const epicMiddleware = createEpicMiddleware(rootEpic);

const reducers = combineReducers({
  enthusiasm
});

const initialState = {};

export const configureStore = () => {
  if (__DEV__) {
    return Reactotron.createStore(reducers, initialState)
  } else {
    return createStore(reducers, initialState)
  }
}

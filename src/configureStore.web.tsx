import {applyMiddleware, createStore} from 'redux';
import { enthusiasm } from './reducers';

export const configureStore = () => {
    return createStore(enthusiasm, applyMiddleware())
}

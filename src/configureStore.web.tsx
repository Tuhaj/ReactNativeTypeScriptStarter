import {applyMiddleware, createStore} from 'redux';
import { enthusiasm } from './reducers';

export const configureStoreWeb = () => {
    return createStore(enthusiasm, applyMiddleware())
}

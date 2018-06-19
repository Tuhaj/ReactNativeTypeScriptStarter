import {applyMiddleware, createStore} from 'redux';
import { enthusiasm } from './reducers';

const initialState = {
    enthusiasmLevel: 1,
    name: 'React Native and Web!',
};

export const configureStoreWeb = () => {
    return createStore(enthusiasm, initialState)
}

import { EnthusiasmAction } from '../actions/index';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../shared/constants/index';

const initialState : StoreState = {
    name: 'React Native + Web Starter',
    enthusiasmLevel: 0
};

export function enthusiasm(state: StoreState = initialState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    }
    return state;
}

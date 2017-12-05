import {SET_CUPS, SET_ML} from './actions';

const CUP_IN_ML = 237;

const initialState = {
    cups: 1,
    ml: CUP_IN_ML
};

export default (state = initialState, action) => {
    if (action.type === SET_CUPS) {
        return Object.assign({}, state, {
            cups: action.cups,
            ml: action.cups * CUP_IN_ML
        });
    } else if (action.type === SET_ML) {
        return Object.assign({}, state, {
            ml: action.ml,
            cups: action.ml / CUP_IN_ML
        });
    }

    return state;
};

import {SET_CUPS, SET_ML} from './actions';

const CUP_IN_ML = 237;

const initialState = {
    cups: 1,
    ml: CUP_IN_ML
};

export default (state, action) => {
    if (action === SET_CUPS) {
        state.cups = action.cups;
        state.ml = action.cups * CUP_IN_ML;
        return state;
    } else if (action === SET_ML) {
        state.ml = action.ml;
        state.cups = action.ml / CUP_IN_ML;
        return state;
    }

    return state;
};

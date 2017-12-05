import React from 'react';
import {connect} from 'react-redux';

import Input from './input';
import {setMl, setCups} from '../actions';

const CUP_IN_ML = 237;

export function App(props) {
    return (
        <form>
            <label htmlFor="cups">Cups:</label>
            <Input
                id="cups"
                value={props.cups}
                onChange={cups => props.dispatch(setCups(cups))}
            />
            <label htmlFor="ml">Ml:</label>
            <Input
                id="ml"
                value={props.ml}
                onChange={ml => props.dispatch(setMl(ml))}
            />
        </form>
    );
}

export const mapStateToProps = (state, props) => ({
    cups: state.cups,
    ml: state.ml
});

export default connect(mapStateToProps)(App);

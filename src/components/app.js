import React from 'react';
import {connect} from 'react-redux';

import Input from './input';
import {setMl, setCups} from '../actions';

export default function App(props) {
    return (
        <form>
            <label htmlFor="cups">Cups:</label>
            <Input
                id="cups"
                value={props.cups}
                onChange={cups => setCups(cups)}
            />
            <label htmlFor="ml">Ml:</label>
            <Input
                id="ml"
                value={props.ml}
                onChange={ml => setMl(ml)}
            />
        </form>
    );
}

export const mapStateToProps = (state, props) => {
    cups: props.cups,
    ml: props.ml
};

export default connect(mapStateToProps, App);

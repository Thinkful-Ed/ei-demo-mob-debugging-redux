import React from 'react';

export default function Input(props) {
    return (
        <input
            type="number"
            id={props.id}
            onChange={e => props.onChange(e.target.value)}
            value={props.value}
        />
    );
}

import React from 'react';

import "./Random.css";

const Phrase = (props) => {

    return (
        <section className='container'>
            <p>{props.phrase}</p>
            <p>Autor: {props.author}</p>
        </section>
    );
};

export default Phrase;


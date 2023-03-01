import React from 'react';



const Phrase = (props) => {

    return (
        <section className='container'>
            <p>{props.phrase}</p>
            <p className='autor'>{props.author}</p>
        </section>
    );
};

export default Phrase;


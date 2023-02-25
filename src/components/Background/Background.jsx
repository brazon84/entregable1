import React from 'react';


const Background = (props) => {
    return (
        <div style={{ backgroundColor: props.color, borderRadius: 15}}>
            {props.children}
        </div>
    );
};

export default Background;
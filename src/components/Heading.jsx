import React from 'react';
import classnames from "classnames";

const Heading = (props) => {
    return (
        <>
            <h2 className={classnames(`primary_heading ${props.className}` )}>{props.heading}</h2>   
        </>
    )
}

export default Heading

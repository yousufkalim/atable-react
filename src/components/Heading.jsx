import React from 'react';
import classnames from "classnames";

const Heading = (props) => {
    return (
        <>
            <h1 className={classnames(`primary_heading ${props.className}` )}>{props.heading}</h1>   
        </>
    )
}

export default Heading

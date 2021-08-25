import React from 'react'
import {Button} from "react-bootstrap";

const CustomButton = (props) => {
    return (
        <>
            <Button {...props} className="custom_button">{props.btntext}</Button>
        </>
    )
}

export default CustomButton

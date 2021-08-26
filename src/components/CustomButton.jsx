import React from 'react'
import {Button, Spinner} from "react-bootstrap";

const CustomButton = (props) => {
    const {btntext, spinner} = props;
    return (
        <>
            <Button {...props} disabled={spinner ? true : false} className="custom_button">

            {spinner ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="lg"
                        role="status"
                        aria-hidden="true"
                      /> 
                    ) : 
                        btntext
                    }
                
            </Button>
        </>
    )
}

export default CustomButton

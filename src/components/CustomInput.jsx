import React from 'react'

const CustomInput = (props) => {
    return (
        <div className="custom_input_container">
            <input className="custom_input" {...props} />
            <div className="custom_input_error">{props.error}</div>
        </div>
    )
}

export default CustomInput

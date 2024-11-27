import React from "react";
import './style.css'

const Button = (props) => {
    return (
        <button type={props.type} className="btn" id={props.id ? props.id : ''} onClick={props.onClick}>
            {props.children ? props.children : (
                <span className="txt-title-primary btn-title">{props.title}</span>
            )}
        </button>
    )
}

export default Button;
import React from "react";
import './style.css'

const Button = (props) => {
    return (
        <div className="btn" id={props.id ? props.id : ''} onClick={props.onClick}>
            {props.children ? props.children : (
                <span className="txt-title-primary btn-title">{props.title}</span>
            )}
        </div>
    )
}

export default Button;
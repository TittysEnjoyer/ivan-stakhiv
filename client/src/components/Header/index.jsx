import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

import Button from "../Button";

const Header = (props) => {
    return (
        <header>
            <div className="logo">
                <img src="/assets/logo/logo.png" alt="logo" />
            </div>

            <nav>
                <ul className="list">
                    <li className="list-item">
                        <a className="list-item-link" href="/">Home</a>
                    </li>
                    <li className="list-item">
                        <a className="list-item-link" href="/all-posts">All Post</a>
                    </li>
                    <li className="list-item">
                        <a className="list-item-link" href="https://www.instagram.com/patlatiy88/">About Me</a>
                    </li>
                </ul>
            </nav>

            <Button onClick={props.onClick} title={'Create Post'} ></Button>
        </header>
    )
}

export default Header;
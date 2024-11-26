import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

import Button from "../Button";

const Header = () => {
    const router = useNavigate();

    return (
        <header>
            <div className="logo">
                <img src="/assets/logo/logo.png" alt="logo" />
            </div>

            <nav>
                <ul className="list">
                    <li className="list-item">
                        <a className="list-item-link" href="">Home</a>
                    </li>
                    <li className="list-item">
                        <a className="list-item-link" href="">My Posts</a>
                    </li>
                    <li className="list-item">
                        <a className="list-item-link" href="">About</a>
                    </li>
                </ul>
            </nav>

            <Button onClick={() => router("/create-post")} title={'Create Post'} ></Button>
        </header>
    )
}

export default Header;
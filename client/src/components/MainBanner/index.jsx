import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

import Button from "../Button";

const MainBanner = () => {
    const router = useNavigate();

    return (
        <div className="banner">
            <div className="banner-content">
                <h1 className="txt-title-primary banner-title">Create Your Post and Share It</h1>
                <h2 className="txt-desc-primary banner-subtitle">Let this be the beginning of something grand. Easy, convenient and free. Create your own business idea and join our community</h2>
                <Button onClick={() => router("/create-post")} id={"banner_btn"} title={'Create Post'} ></Button>
            </div>
            <div className="banner-image">
                <img src="/assets/images/main-banner.jpg" alt="" />
            </div>
        </div>
    )
}

export default MainBanner;
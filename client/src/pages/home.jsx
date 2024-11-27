import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Gallery from "../components/Gallery";

const HomePage = () => {
    const router = useNavigate();
    return (
        <div className="container">
            <Header onClick={() => router("/all-posts")} />
            <MainBanner />
            <Gallery />
        </div>
    )
}

export default HomePage;
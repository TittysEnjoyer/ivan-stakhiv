import React from "react";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Gallery from "../components/Gallery";

const HomePage = () => {
    return (
        <div className="container">
            <Header />
            <MainBanner />
            <Gallery />
        </div>
    )
}

export default HomePage;
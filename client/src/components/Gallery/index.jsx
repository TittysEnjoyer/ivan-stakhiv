import React from "react";
import './style.css'

const Gallery = () => {
    return (
        <div className="gallery">
            <h2 className="txt-title-primary gallery-title">What's on your mind?</h2>
            <div className="gallery-wrapper">
                <div className="gallery-card">
                    <img className="gallery-card-image" src="/assets/images/1.png" alt="" />
                    <h2 className="txt-title-primary gallery-card-title">Education</h2>
                    <span className="txt-desc-primary gallery-card-desc">Interactive content with vibrant animations and captivating visual effects.</span>
                </div>
                <div className="gallery-card">
                    <img className="gallery-card-image" src="/assets/images/2.png" alt="" />
                    <h2 className="txt-title-primary gallery-card-title">Education</h2>
                    <span className="txt-desc-primary gallery-card-desc">Interactive content with vibrant animations and captivating visual effects.</span>
                </div>
                <div className="gallery-card">
                    <img className="gallery-card-image" src="/assets/images/3.png" alt="" />
                    <h2 className="txt-title-primary gallery-card-title">Education</h2>
                    <span className="txt-desc-primary gallery-card-desc">Interactive content with vibrant animations and captivating visual effects.</span>
                </div>
                <div className="gallery-card">
                    <img className="gallery-card-image" src="/assets/images/4.png" alt="" />
                    <h2 className="txt-title-primary gallery-card-title">Education</h2>
                    <span className="txt-desc-primary gallery-card-desc">Interactive content with vibrant animations and captivating visual effects.</span>
                </div>
                <div className="gallery-card">
                    <img className="gallery-card-image" src="/assets/images/5.png" alt="" />
                    <h2 className="txt-title-primary gallery-card-title">Education</h2>
                    <span className="txt-desc-primary gallery-card-desc">Interactive content with vibrant animations and captivating visual effects.</span>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
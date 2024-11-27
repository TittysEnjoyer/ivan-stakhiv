import React from "react";
import './style.css'

const Gallery = () => {
    return (
        <div className="gallery">
            <h2 className="txt-title-primary gallery-title">What's on your mind?</h2>
            <div className="gallery-wrapper">
                <div className="gallery-card">
                    <img className="gallery-card-image" src="/assets/images/1.png" alt="" />
                    <h2 className="txt-title-primary gallery-card-title">Швидко</h2>
                    <span className="txt-desc-primary gallery-card-desc">Знайдіть відповідь на своє питання в декілька кліків.</span>
                </div>
                <div className="gallery-card">
                    <img className="gallery-card-image" src="/assets/images/2.png" alt="" />
                    <h2 className="txt-title-primary gallery-card-title">Зручно</h2>
                    <span className="txt-desc-primary gallery-card-desc">На нашоииу сайті дуже проста навігація.</span>
                </div>
                <div className="gallery-card">
                    <img className="gallery-card-image" src="/assets/images/3.png" alt="" />
                    <h2 className="txt-title-primary gallery-card-title">Безпечно</h2>
                    <span className="txt-desc-primary gallery-card-desc">Сайт надійно захищений від хакерів.</span>
                </div>
                <div className="gallery-card">
                    <img className="gallery-card-image" src="/assets/images/4.png" alt="" />
                    <h2 className="txt-title-primary gallery-card-title">Пізнавально</h2>
                    <span className="txt-desc-primary gallery-card-desc">Читайте та відкривайте для себе щось нове.</span>
                </div>
                <div className="gallery-card">
                    <img className="gallery-card-image" src="/assets/images/5.png" alt="" />
                    <h2 className="txt-title-primary gallery-card-title">Зворотний зв'язок</h2>
                    <span className="txt-desc-primary gallery-card-desc">Питання, скарги та пропозиція у вкладці 'About me'.</span>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
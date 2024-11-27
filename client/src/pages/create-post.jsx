import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Post from "../components/Post";
import Modal from "../components/Modal";

const CreatePostPage = () => {
    const [isClosed, setIsClosed] = useState(true);
    const router = useNavigate();

    const handleOpenModal = () => {
        router("/all-posts")
        setIsClosed(false)
    };
    const handleCloseModal = () => setIsClosed(true);

    return (
        <div className="container">
            <Header onClick={handleOpenModal} />
            <div className="post-wrapper">
                <Post />
            </div>
            <Modal closed={isClosed} onClose={handleCloseModal} />
        </div>
    );
}

export default CreatePostPage;
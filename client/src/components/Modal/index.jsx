import React, { useState, useEffect } from "react";
import Button from "../Button";
import './style.css';

const Modal = ({ closed, onClose }) => {
    const [formData, setFormData] = useState({
        nickname: '',
        post: '',
        tag: ''
    });

    useEffect(() => {
        if (closed) {
            setFormData({ nickname: '', post: '', tag: '' }); // Очищуємо форму, коли модалка закрита
        }
    }, [closed]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://express-backend-azure.vercel.app/api/create-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({ nickname: '', post: '', tag: '' });
                onClose();
            } else {
                alert('Сталася помилка під час створення поста.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Сталася помилка при підключенні до сервера.');
        }
    };

    return (
        <div className={`modal ${closed ? "closed-form" : ''}`}>
            <form className="modal-wrapper" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nickname"
                    placeholder="Ваш нікнейм"
                    value={formData.nickname}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="post"
                    placeholder="Ваш пост"
                    value={formData.post}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="tag"
                    placeholder="Тег"
                    value={formData.tag}
                    onChange={handleChange}
                    required
                />
                <Button type={"submit"} title={'Створити Пост'} />
                <div className="close" onClick={onClose}></div>
            </form>
        </div>
    );
};

export default Modal;
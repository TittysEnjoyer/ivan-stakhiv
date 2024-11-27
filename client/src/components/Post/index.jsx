import React, { useState, useEffect } from "react";
import Button from "../Button";
import './style.css';

const Post = (props) => {
    const [fetchData, setFetchData] = useState(null);

    const fetchDataFromAPI = async () => {
        try {
            const response = await fetch('https://express-backend-azure.vercel.app/api/all-post');
            const data = await response.json();
            setFetchData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://express-backend-azure.vercel.app/api/delete-post/${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            if (response.ok) {
                setFetchData(fetchData.filter(post => post.id !== id));
            } else {
                alert(result.message || 'Не вдалося видалити пост');
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            alert('Сталася помилка при видаленні поста');
        }
    };

    useEffect(() => {
        fetchDataFromAPI();
    }, [fetchData]);

    return (
        <div className="post-wrapper" id={props.id || ''} onClick={props.onClick}>
            {fetchData ? 
            (
                fetchData.map((e, i) => {
                    return (
                        <div className="post" key={i}>
                            <div className="user-logo"></div>
                            <div className="user-post">
                                <div className="triangle"></div>
                                <div className="user-post-content">
                                    <div className="user-post-content-wrapper">
                                        <h2 className="txt-title-primary">{e.nickname}</h2>
                                        <span className="txt-desc-primary"><i>{e.post}</i></span>
                                    </div>
                                    <div className="user-panel">
                                        <h2 className="txt-title-primary user-tag">{e.tag}</h2>
                                        <div className="buttons">
                                            <Button onClick={() => handleDelete(e._id)} title={'delete'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            ) : 
            (<>Loading...</>)
            }
        </div>
    );
};

export default Post;
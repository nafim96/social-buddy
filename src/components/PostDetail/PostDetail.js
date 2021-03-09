
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const { postId } = useParams()
    const [posts, setPosts] = useState({})
    const { id, title, body } = posts;
    const [comments, setComments] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [postId])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [postId])
    return (
        <div>
            <h4>{id}</h4>
            <h1>{title}</h1>
            <p>{body}</p>
            <h1>Number of Comments: {comments.length}</h1>
            {
                comments.map(comment=> <Comment comments={comment} key={comment.id}></Comment>)
            }
        </div>
    );
};

export default PostDetail;
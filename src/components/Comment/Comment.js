
import React from 'react';

const Comment = (props) => {
    const comments = props.comments
    const { name, email, body } = comments;
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <h5>{email}</h5>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Comment;
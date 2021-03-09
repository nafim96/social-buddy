
import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = (props) => {
    const posts = props.post

    const history = useHistory()
    const handleDetail = (postId) => {
        const url = `posts/${postId}`;
        history.push(url)
        console.log(url);
    }

    return (
        <div className="post-container">

            {
                posts.map(post => {
                    const { id, title } = post;
                    return (
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={`/posts/${id}`}><p>Show About</p></Link>
                                    <Button variant="outline-success" onClick={() => handleDetail(id)}>Details</Button>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    )
                })
            }

        </div>
    );
};

export default Post;